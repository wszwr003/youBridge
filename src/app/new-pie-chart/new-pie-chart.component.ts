import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-new-pie-chart",
  templateUrl: "./new-pie-chart.component.html",
  styleUrls: ["./new-pie-chart.component.scss"],
})
export class NewPieChartComponent implements OnInit {
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
          { name: "5IN1传感器", y: 11, color: "#00BEA0" },
          { name: "空调", y: 4, color: "#0A96DC" },
          { name: "空气净化器", y: 3, color: "#435C73" },
          { name: "OTDR", y: 1, color: "#7360BB" },
          { name: "熔接机", y: 1, color: "#C0C4C8" },
          { name: "小仪器仪表", y: 0, color: "#E64B3F" },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
