//FAO: 使用了纯highchart,没有使用angular-highcharts,notuse
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from "@angular/core";
import * as Highcharts from "highcharts";
declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");
let D3 = require("highcharts/highcharts-3d");
Boost(Highcharts);
More(Highcharts);
noData(Highcharts);
D3(Highcharts);
@Component({
  selector: "app-data-pie",
  templateUrl: "./data-pie.component.html",
  styleUrls: ["./data-pie.component.scss"]
})
export class DataPieComponent implements OnInit {
  public options: any;
  constructor() {}
  // 监测@input:data改动!
  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.options = {
      chart: {
        height: 100,
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
          depth: 20
        }
      },
      series: [
        {
          name: "设备数量",
          data: [
            ["空调", 0],
            ["空气净化器", 0],
            ["OTDR", 0],
            ["熔接机", 0],
            ["5IN1传感器", 11],
            ["小仪器仪表", 0]
          ]
        }
      ]
    };

    Highcharts.chart("container", this.options);
  }
}
