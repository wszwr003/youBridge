import { Component, OnInit } from "@angular/core";
import { ChartInit } from './sensor-chart';

@Component({
  selector: "app-mutisensor-view",
  templateUrl: "./mutisensor-view.component.html",
  styleUrls: ["./mutisensor-view.component.scss"]
})
export class MutisensorViewComponent implements OnInit {
  public sensorChartInit : ChartInit = {
    chartType: 'scatter',
    chartHeight: 500,
    dateFormat: '%y-%m-%d %H:%M:%S',
    seriesName:['温度','湿度','二氧化碳浓度','PM2.5浓度'],
  };

  constructor() {}

  ngOnInit() {}
}
