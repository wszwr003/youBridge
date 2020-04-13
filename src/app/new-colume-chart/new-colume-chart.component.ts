import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
var d3 = require("highcharts/highcharts-3d");

d3(Highcharts);
@Component({
  selector: "app-new-colume-chart",
  templateUrl: "./new-colume-chart.component.html",
  styleUrls: ["./new-colume-chart.component.scss"],
})
export class NewColumeChartComponent implements OnInit {
  private dataChart: Highcharts.Chart = null;
  public options: any;

  constructor() {}

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.options = {
      chart: {
        type: "column",
        options3d: {
          enabled: true,
          alpha: 0,
          beta: 0,
          depth: 10,
          viewDistance: 100,
        },
        width: 760,
      },
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      plotOptions: {
        column: {
          depth: 25,
        },
        series: {
          color: "#00BEA0",
        },
      },
      series: [
        {
          data: [
            29.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4,
          ],
        },
      ],
    };

    this.dataChart = Highcharts.chart("container", this.options);
  }
}
