import { Component, OnInit, SimpleChanges } from "@angular/core";
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
      height: 250,
      width: 250,
      options3d: {
        enabled: true,
        alpha: 30,
      },
    },
    //legend位置
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
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
          { name: "空调", y: 10, color: "#00BEA0" },
          { name: "新风机", y: 3, color: "#0A96DC" },
          { name: "研磨机", y: 2, color: "#435C73" },

          // { name: "OTDR", y: 3, color: "#7360BB" },
          // { name: "熔接机", y: 3, color: "#C0C4C8" },
          // { name: "小仪器仪表", y: 6, color: "#E64B3F" },
        ],
      },
    ],
  };
  constructor() {}
  ngOnInit() {}
}
