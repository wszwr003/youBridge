import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { sensorData } from "../services/sensor-data";

export interface PeriodicElement {
  id: string;
  time: string;
  kind: string;
  para: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {
  //   id: "861011047511899",
  //   time: "03/03 13:00",
  //   kind: "采集数据",
  //   para: "CO2:444,PM25:78,温度:30,湿度:80",
  // },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
  {
    id: " ",
    time: " ",
    kind: " ",
    para: " ",
  },
];

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ["id", "time", "temp", "hum"];
  @Input() historyMsg: sensorData[] = [];
  dataSource: PeriodicElement[] = ELEMENT_DATA;
  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "historyMsg": {
            console.log("historyMsg:");
            console.log(this.historyMsg);
            for (let i = 0; i < this.historyMsg.length; i++) {
              const element = this.historyMsg[i];
              this.dataSource[i].id = element.device_id.slice(9);
              this.dataSource[i].time = element.time;
              this.dataSource[i].kind = "数据";
              this.dataSource[i].para =
                "VOC:" +
                element.voc_lvl +
                ",CO2:" +
                element.co2 +
                ",PM2.5:" +
                element.pm25 +
                ",温度:" +
                element.temp +
                ",湿度:" +
                element.humi;
            }
          }
        }
      }
    }
  }
}
