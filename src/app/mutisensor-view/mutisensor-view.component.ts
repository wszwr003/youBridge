import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChartInit } from './sensor-chart';
import { MyMqttService } from "../services/my-mqtt.service";
@Component({
  selector: "app-mutisensor-view",
  templateUrl: "./mutisensor-view.component.html",
  styleUrls: ["./mutisensor-view.component.scss"]
})
export class MutisensorViewComponent implements OnInit {
  @ViewChild('msglog', { static: true }) msglog: ElementRef;
  private topic :string = "data";
  private sensor6in1_mock_data = {
    "device_id": "12345678",
    "key": "12345678",
    "temp": "22度"
  }
  public sensorChartInit : ChartInit = {
    chartType: 'scatter',
    chartHeight: 500,
    dateFormat: '%y-%m-%d %H:%M:%S',
    seriesName:['温度','湿度','二氧化碳浓度','PM2.5浓度'],
  };

  constructor(private myMqttService : MyMqttService) {}

  sendMsg(){
    this.myMqttService.sendMsg(this.topic,JSON.stringify(this.sensor6in1_mock_data));
  }
  
  ngOnInit() {
    this.sendMsg();
  }
}
