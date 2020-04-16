import { Component } from "@angular/core";
import { MyMqttService } from "../services/my-mqtt.service";
import { HttpService } from "../services/http.service";
import { IMqttMessage } from "ngx-mqtt";
import { sensorData, deviceState } from "../services/sensor-data";

@Component({
  selector: "app-over-view",
  templateUrl: "./over-view.component.html",
  styleUrls: ["./over-view.component.scss"],
})
export class OverViewComponent {
  public historyMsgStrings: string[] = []; //FAO: 不初始化会出错!!??
  public historyMsg: sensorData[] = []; //FAO: 不初始化会出错!!??
  private testTopic: string = "data";
  public device_id: string = "861011047511899";
  public online_num: number = 0;
  public device_list: deviceState[] = [
    { device_id: "861011047511899", state: false },
    { device_id: "861011047486233", state: false },
    { device_id: "861011047455360", state: false },
    { device_id: "861011047485656", state: false },
    { device_id: "861011047485565", state: false },
    { device_id: "861011047418186", state: false },
    { device_id: "861011047485599", state: false },
    { device_id: "861011047486225", state: false },
    { device_id: "861011047486134", state: false },
    { device_id: "861011047486209", state: false },
  ];
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
        this.subscribe_msg.time = mytime;
        console.log(
          "OVERVIVEW GET MQTT MSG: " +
            JSON.stringify(this.subscribe_msg) +
            ",TOPIC: " +
            this.testTopic
        );
        // for (let index = 0; index < this.device_list.length; index++) {
        //   if (
        //     this.device_list[index].device_id ==
        //     JSON.parse(message.payload.toString()).device_id
        //   ) {
        //     this.device_list[index].state = true;
        //     console.log(this.device_list[index].device_id, "true");
        //     this.device_list[index].timer = setTimeout(function () {
        //     }, 15000);
        //     // if (this.device_list[index].timer != undefined)
        //     //   clearTimeout(this.device_list[index].timer);
        //   }
        // }
        if (this.historyMsgStrings.length >= 8) {
          this.historyMsgStrings.shift();
          this.historyMsg.shift();
        }
        this.historyMsgStrings.push(JSON.stringify(this.subscribe_msg));
        this.historyMsg.push(this.subscribe_msg);
        this.historyMsg = this.historyMsg.slice(); //用于数组响应input!!!!
        if (
          JSON.parse(message.payload.toString()).device_id == this.device_id
        ) {
          this.data = this.subscribe_msg;
        }
      }
    });
  }

  public ofline_device(index: number): void {
    this.device_list[index].state = false;
    console.log(this.device_list[index].device_id, "false");
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
