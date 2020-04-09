import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-new-line-chart",
  templateUrl: "./new-line-chart.component.html",
  styleUrls: ["./new-line-chart.component.scss"],
})
export class NewLineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    xAxis: {
      title: {
        text: "时间",
      },
      type: "datetime",
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%y-%m-%d", this.value); //TBS:this.value
        },
      },
    },
    yAxis: {
      title: {
        text: "数量",
      },
    },
    series: [
      {
        
        name: "",
        data: [
          [new Date("2020-01-25 00:00:00").getTime(), 1],
          [new Date("2020-01-30 00:00:00").getTime(), 2],
          [new Date("2020-02-15 00:00:00").getTime(), 5],
          [new Date("2020-02-19 00:00:00").getTime(), 9],
          [new Date("2020-03-05 00:00:00").getTime(), 10],
          [new Date("2020-03-16 00:00:00").getTime(), 15],
          [new Date("2020-04-05 00:00:00").getTime(), 21],
        ],
        type: "line",
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
