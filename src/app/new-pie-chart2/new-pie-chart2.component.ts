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
        showInLegend: true, //增加legend
        //取消直接表示
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "设备数量",
        data: [
          { name: "运行中设备", y: 8, color: "#55FF00" },
          { name: "未运行设备", y: 2, color: "#C0C4C8" },
          { name: "未启用设备", y: 5, color: "#435C73" },
        ],
      },
    ],
  };
  constructor() {}
  ngOnInit() {}
}
