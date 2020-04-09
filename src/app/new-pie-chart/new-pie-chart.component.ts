import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-new-pie-chart",
  templateUrl: "./new-pie-chart.component.html",
  styleUrls: ["./new-pie-chart.component.scss"]
})
export class NewPieChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    credits: {
      enabled: false
    },
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 30
      }
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    plotOptions: {
      pie: {
        innerSize: 30,
        depth: 30
      }
    },
    series: [
      {
        name: "设备数量",
        data: [
          ["5IN1传感器", 11],
          ["空调", 4],
          ["空气净化器", 3],
          ["OTDR", 1],
          ["熔接机", 1],
          ["小仪器仪表", 0]
        ]
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
