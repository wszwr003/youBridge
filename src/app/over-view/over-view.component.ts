import { Component } from "@angular/core";
import { MyMqttService } from "../services/my-mqtt.service";
import { HttpService } from "../services/http.service";
import { IMqttMessage } from "ngx-mqtt";
import { sensorData } from "../services/sensor-data";

@Component({
  selector: "app-over-view",
  templateUrl: "./over-view.component.html",
  styleUrls: ["./over-view.component.scss"],
})
export class OverViewComponent {
  public historyMsgStrings: string[] = []; //FAO: 不初始化会出错!!??
  private testTopic: string = "data";
  public device_id: string = "861011047486233";
  public subscribe_msg: sensorData = {
    co2: 0,
    pm25: 0,
    temp: 0,
    humi: 0,
    voc_lvl: 0,
  };
  public data: sensorData = {
    co2: 0,
    pm25: 0,
    temp: 0,
    humi: 0,
    voc_lvl: 0,
  };
  public observeMQTT;
  constructor(
    private myMqttService: MyMqttService,
    private http: HttpService
  ) {}
  subscribeTopic() {
    // TBS:如何在component中订阅这个订阅
    this.observeMQTT = this.myMqttService.MQRRService.observe(
      this.testTopic
    ).subscribe((message: IMqttMessage) => {
      {
        var date = new Date();
        var mytime = date.toLocaleTimeString();
        this.subscribe_msg = JSON.parse(message.payload.toString());
        console.log(
          "OVERVIVEW GET MQTT MSG: " +
            JSON.stringify(this.subscribe_msg) +
            ",TOPIC: " +
            this.testTopic
        );
        if (this.historyMsgStrings.length >= 8) {
          this.historyMsgStrings.shift();
        }
        this.historyMsgStrings.push(
          mytime + ":" + JSON.stringify(this.subscribe_msg)
        );
        if (
          JSON.parse(message.payload.toString()).device_id == this.device_id
        ) {
          this.data = this.subscribe_msg;
        }
      }
    });
  }
  onNotify(device_id) {
    //father component
    //window.alert(device_id);
    this.device_id = device_id;
    this.http
      .postHttp("/get-data", {
        device_id: this.device_id,
      })
      .subscribe((data) => {
        if (data[0] == undefined)
          this.data = {
            co2: null,
            pm25: null,
            temp: null,
            humi: null,
            voc_lvl: null,
          };
        else this.data = data[0];
      });
  }
  ngOnDestroy() {
    this.observeMQTT.unsubscribe();
  }
  ngOnInit() {
    //订阅MQTT服务器的data主题
    this.subscribeTopic();
    //this.publishMsg();
    //通过post方式从mysql服务器获取历史数据
    this.http
      .postHttp("/get-data", {
        device_id: this.device_id,
      })
      .subscribe((data) => {
        if (data[0] == undefined)
          this.data = {
            co2: null,
            pm25: null,
            temp: null,
            humi: null,
            voc_lvl: null,
          };
        else this.data = data[0];
      });
  }
}
