import { Component, OnInit, OnChanges,SimpleChanges, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import { ChartInit } from "../mutisensor-view/sensor-chart";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: "app-data-chart",
  templateUrl: "./data-chart.component.html",
  styleUrls: ["./data-chart.component.scss"]
})
export class DataChartComponent implements OnInit ,OnChanges{
  @Input() chartInit: ChartInit = {
    //设置默认值
    chartType: null,
    chartHeight: null,
    dateFormat: null,
    seriesName: null
  };
  @Input() data: object = {};
  public options: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data.toString());
  }
  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    console.log("1111111", this.chartInit);
    this.options = {
      chart: {
        type: this.chartInit.chartType,
        height: this.chartInit.chartHeight
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function() {
          return this.y.toFixed(2);
        }
      },
      xAxis: {
        type: "datetime",
        labels: {
          formatter: function() {
            return Highcharts.dateFormat("%H:%M:%S", this.value); //TBS:this.value
          }
        }
      },
      yAxis: [
        {
          type: "CO2"
        }
      ],
      series: [
        {
          name: "PM2.5浓度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 32],
            [new Date("2018-01-25 19:38:31").getTime(), 666]
          ]
        },
        {
          name: "二氧化碳浓度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 123],
            [new Date("2018-01-25 19:38:31").getTime(), 480]
          ]
        },
        {
          name: "温度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 18],
            [new Date("2018-01-25 19:38:31").getTime(), 333]
          ]
        },
        {
          name: "湿度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 68],
            [new Date("2018-01-25 19:38:31").getTime(), 555]
          ]
        },
        {
          name: "VOC等级",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 32],
            [new Date("2018-01-25 19:38:31").getTime(), 666]
          ]
        }
      ]
    };

    Highcharts.chart("container", this.options);
  }
}
