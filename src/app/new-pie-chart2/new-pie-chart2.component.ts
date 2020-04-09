import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-new-pie-chart2",
  templateUrl: "./new-pie-chart2.component.html",
  styleUrls: ["./new-pie-chart2.component.scss"],
})
export class NewPieChart2Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    credits: {
      enabled: false,
    },
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 30,
      },
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    plotOptions: {
      pie: {
        innerSize: 30,
        depth: 30,
      },
    },
    series: [
      {
        name: "设备数量",
        data: [
          ["在线设备", 10],
          ["离线设备", 9],
          ["异常设备", 2],
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
