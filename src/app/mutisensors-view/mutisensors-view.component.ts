import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Device } from "../services/device";
import { SensorData } from "../services/sensor-data";
import { MyMqttService } from "../services/my-mqtt.service";
import { IMqttMessage } from "ngx-mqtt/src/mqtt.model";

@Component({
  selector: "app-mutisensors-view",
  templateUrl: "./mutisensors-view.component.html",
  styleUrls: ["./mutisensors-view.component.scss"],
})
export class MutisensorsViewComponent implements OnInit {
  public newestDatas: SensorData[] = [
    { device_id: "861011047511899" },
    { device_id: "861011047455360" },
    { device_id: "861011047485656" },
    { device_id: "861011047485565" },
    { device_id: "861011047418186" },
    { device_id: "861011047485599" },
    { device_id: "861011047486225" },
    { device_id: "861011047486134" },
    { device_id: "861011047486233" },
    { device_id: "861011047486209" },
  ];
  public devices: Device[];
  public devicesInit: Device[] = null;
  private observeMQTT = null; //mqtt 实例
  public tick;
  constructor(
    private myMqttService: MyMqttService,
    private http: HttpService
  ) {}

  ngOnInit() {
    //初始化时获取所有设备参数和状态
    this.http
      .postHttp("/get-all-device", {})
      .subscribe((devices: Array<Device>) => {
        this.devices = devices;
        this.devicesInit = this.devices;
        console.log(this.devices);
      });
    //通过post方式从mysql服务器获取不同设备的数据库最新数据
    this.http
      .postHttp("/get-data-devices", {})
      .subscribe((newestDatas: SensorData[]) => {
        this.newestDatas = newestDatas;
      });
    //订阅:MQTT服务器的data主题获取不同设备实时数据 FAO:destory
    this.subscribeTopic();
    //定时任务:获取所有设备参数和状态 FAO:destory
    this.tick = setInterval(() => {
      this.http
        .postHttp("/get-all-device", {})
        .subscribe((devices: Array<Device>) => {
          this.devices = devices;
        });
    }, 10000);
  }

  ngOnDestroy() {
    this.observeMQTT.unsubscribe();
    clearInterval(this.tick);
  }

  subscribeTopic() {
    // TBS:如何在component中订阅这个订阅
    this.observeMQTT = this.myMqttService.MQRRService.observe("data").subscribe(
      (message: IMqttMessage) => {
        var tempSensorData: SensorData = JSON.parse(message.payload.toString());
        for (let i = 0; i < this.newestDatas.length; i++) {
          if (this.newestDatas[i].device_id == tempSensorData.device_id) {
            this.newestDatas[i] = tempSensorData;
            this.newestDatas = this.newestDatas.slice(); //用于数组响应input!!!!
          }
        }
      }
    );
  }
}
