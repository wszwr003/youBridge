import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChartInit } from "./sensor-chart";
import { IMqttMessage } from "ngx-mqtt";
import { ActivatedRoute } from "@angular/router";
import { MyMqttService } from "../services/my-mqtt.service";
import { HttpService } from "../services/http.service";
@Component({
  selector: "app-mutisensor-view",
  templateUrl: "./mutisensor-view.component.html",
  styleUrls: ["./mutisensor-view.component.scss"],
})
export class MutisensorViewComponent implements OnInit {
  @ViewChild("msglog", { static: true }) msglog: ElementRef;
  public device_id: string = "";
  public subscribe_msg: object = {};
  public datas: object = {};
  public historyMsgStrings: string[] = []; //FAO: 不初始化会出错!!??
  private settingTopic: string = "setting";
  private settingSensorData = {
    device_id: "",
    key: "",
    time: 0,
    intervalSecond: 60,
  };

  private testTopic: string = "data";
  public sensorChartInit: ChartInit = {
    chartType: "spline",
    chartHeight: 350,
    dateFormat: "%H:%M:%S",
    seriesName: ["温度", "湿度", "二氧化碳浓度", "PM2.5浓度"],
  };
  constructor(
    private myMqttService: MyMqttService,
    private route: ActivatedRoute,
    private http: HttpService
  ) {}

  publishMsg() {
    this.myMqttService.sendMsg(
      this.settingTopic,
      JSON.stringify(this.settingSensorData)
    );
  }

  //not use;
  subscribeMsg() {
    this.myMqttService.subscribeNewTopic();
  }

  subscribeTopic() {
    // TBS:如何在component中订阅这个订阅
    this.myMqttService.MQRRService.observe(this.testTopic).subscribe(
      (message: IMqttMessage) => {
        if (
          JSON.parse(message.payload.toString()).device_id == this.device_id
        ) {
          var date = new Date();
          var mytime = date.toLocaleTimeString();
          this.subscribe_msg = JSON.parse(message.payload.toString());
          console.log(
            "GET MQTT MSG: " +
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
        }
      }
    );
  }

  ngOnInit() {
    //获取当前页面的(设备id)来显示不同的设备页面和数据
    this.route.paramMap.subscribe((params) => {
      this.device_id = params.get("deviceId");
      this.settingSensorData.device_id = this.device_id;
    });
    //订阅MQTT服务器的data主题
    this.subscribeTopic();
    //this.publishMsg();
    //通过post方式从mysql服务器获取历史数据
    this.http
      .postHttp("/get-datas", {
        device_id: this.device_id,
      })
      .subscribe((datas) => {
        this.datas = datas;
      });
  }
}
