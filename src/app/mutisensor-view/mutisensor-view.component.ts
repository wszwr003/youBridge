import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChartInit } from "./sensor-chart";
import { IMqttMessage } from "ngx-mqtt";
import { ActivatedRoute } from "@angular/router";
import { MyMqttService } from "../services/my-mqtt.service";
import { HttpService } from "../services/http.service";
import { SensorData, LOCATIONS, GPS } from "../services/sensor-data";
@Component({
  selector: "app-mutisensor-view",
  templateUrl: "./mutisensor-view.component.html",
  styleUrls: ["./mutisensor-view.component.scss"],
})
export class MutisensorViewComponent implements OnInit {
  public deviceId: string = "";
  public location: GPS;
  //实时数据 @input to chart card
  public realTimeData: SensorData = {
    co2: 0,
    pm25: 0,
    temp: 0,
    humi: 0,
    voc_lvl: 0,
  };
  //历史数据 @input to chart card
  public historyDatas: SensorData[] = [
    {
      co2: 0,
      pm25: 0,
      temp: 0,
      humi: 0,
      voc_lvl: 0,
    },
  ];
  //实时数据模块,数据(先从数据库获取一个最新数据,再获取实时数据) @input to newest card
  public newestData: SensorData = {
    co2: 0,
    pm25: 0,
    temp: 0,
    humi: 0,
    voc_lvl: 0,
  };
  //图表的相关设置参数 @input to chart card
  public chartInit: ChartInit = {
    chartType: "spline",
    chartHeight: 350,
    dateFormat: "%H:%M:%S",
    seriesName: ["温度", "湿度", "二氧化碳浓度", "PM2.5浓度"],
  };
  private observeMQTT = null; //mqtt 实例
  private dataTopic: string = "data";
  private settingTopic: string = "setting";
  private settingSensorData = {
    deviceId: "",
    key: "",
    time: 0,
    intervalSecond: 60,
    bindDeviceId: "",
  };
  // public eventMessageString: string[] = []; //FAO: 不初始化会出错!!??

  constructor(
    private myMqttService: MyMqttService,
    private route: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit() {
    //获取当前页面的(设备id)来显示不同的设备页面和数据
    //FAO!!!TBS!!!TODO:!!!FIXME:!!!
    //ngOnInit不同的参数子界面,只会初始化一次!!!!!!!!
    //需要放到订阅中处理每次载入子界面才会调用!!!!!!!
    this.route.paramMap.subscribe((params) => {
      console.log("##1##mutisensor-view!");
      this.deviceId = params.get("deviceId");
      this.settingSensorData.deviceId = this.deviceId;
      console.log("##2##deviceId:", this.deviceId);
      //取消之前的订阅
      try {
        this.observeMQTT.unsubscribe();
      } catch (error) {
        console.log("##3##there is no subscribe!");
      }
      //初始化child component 数据!
      console.log("##4##deviceId:", this.deviceId);
      //从LOCATIONS常量获取定位信息,后续改成从数据库或实时数据获取
      LOCATIONS.forEach((element) => {
        if (element.deviceId == this.deviceId) {
          this.location = element;
        }
      });
      //订阅MQTT服务器的data主题
      this.subscribeTopic(this.deviceId);
      //通过post方式从mysql服务器获取图表历史数据
      this.http
        .postHttp("/get-datas", {
          device_id: this.deviceId,
        })
        .subscribe((datas: SensorData[]) => {
          this.historyDatas = datas;
          this.newestData = datas[0];
        });
    });
  }

  ngOnDestroy() {
    this.observeMQTT.unsubscribe();
  }

  subscribeTopic(deviceId: string) {
    // TBS:如何在component中订阅这个订阅
    this.observeMQTT = this.myMqttService.MQRRService.observe(
      this.dataTopic
    ).subscribe((message: IMqttMessage) => {
      var tempSensorData: SensorData = JSON.parse(message.payload.toString());
      if (tempSensorData.device_id == deviceId) {
        var date = new Date();
        this.realTimeData = tempSensorData;
        this.newestData = tempSensorData;
        console.log(
          "<-MutiSensor View Get MQTT MSG: " +
            JSON.stringify(this.realTimeData) +
            ",TOPIC: " +
            message.topic
        );
        // var mytime = date.toLocaleTimeString();
        // if (this.eventMessageString.length >= 8) {
        //   this.eventMessageString.shift();
        // }
        // this.eventMessageString.push(
        //   mytime + ":" + JSON.stringify(this.realTimeData)
        // );
      }
    });
  }

  //mqtt publish not use
  publishMsg() {
    this.myMqttService.sendMsg(
      this.settingTopic,
      JSON.stringify(this.settingSensorData)
    );
  }
  //mqtt subscribe not use!!;TBS
  subscribeMsg() {
    this.myMqttService.subscribeNewTopic();
  }
}
