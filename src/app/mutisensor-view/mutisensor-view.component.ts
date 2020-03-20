import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChartInit } from "./sensor-chart";
import { MyMqttService } from "../services/my-mqtt.service";
import { IMqttMessage } from "ngx-mqtt";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-mutisensor-view",
  templateUrl: "./mutisensor-view.component.html",
  styleUrls: ["./mutisensor-view.component.scss"]
})
export class MutisensorViewComponent implements OnInit {
  @ViewChild("msglog", { static: true }) msglog: ElementRef;
  private deviceId: string = "99999999";
  private testMsg: IMqttMessage;
  private testTopic: string = "data";

  private testSensor_mock_data = {
    device_id: "99999999",
    key: "12345678",
    temp: "22度"
  };
  public sensorChartInit: ChartInit = {
    chartType: "scatter",
    chartHeight: 500,
    dateFormat: "%y-%m-%d %H:%M:%S",
    seriesName: ["温度", "湿度", "二氧化碳浓度", "PM2.5浓度"]
  };

  constructor(
    private myMqttService: MyMqttService,
    private route: ActivatedRoute
  ) {}

  publishMsg() {
    this.myMqttService.sendMsg(
      this.testTopic,
      JSON.stringify(this.testSensor_mock_data)
    );
  }

  //not use;
  subscribeMsg() {
    this.myMqttService.subscribeNewTopic();
  }

  subscribeTopic() {
    console.log("WEB:Subscribe new topic");
    // TBS:如何在component中订阅这个订阅
    this.myMqttService.MQRRService.observe(
      this.testTopic
    ).subscribe((message: IMqttMessage) => {
      console.log(JSON.parse(message.payload.toString()).device_id,this.deviceId);
      if (JSON.parse(message.payload.toString()).device_id == this.deviceId) {
        this.testMsg = message;
        //console.log("msg: ", message);
        console.log(
          "WEB:Message: " +
            this.testMsg.payload.toString() +
            "<br> for topic: " +
            message.topic
        );
      }
    });
    console.log("WEB:subscribed to topic: " + this.testTopic);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {  //获取当前页面的(设备id)来显示不同的设备数据
      this.deviceId = params.get("deviceId");
      this.testSensor_mock_data.device_id = this.deviceId;
    });
    this.subscribeTopic();
    //this.publishMsg();
  }
}
