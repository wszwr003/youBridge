import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Device } from "../services/device";
import { SensorData } from "../services/sensor-data";

@Component({
  selector: "app-mutisensor-card",
  templateUrl: "./mutisensor-card.component.html",
  styleUrls: ["./mutisensor-card.component.scss"],
})
export class MutisensorCardComponent implements OnChanges {
  @Input() newestDatas: SensorData[];
  @Input() device: Device;
  public state: string = "离线";
  public newestData: SensorData = null;
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "newestDatas": {
            for (let i = 0; i < this.newestDatas.length; i++) {
              if (this.device.device_no == this.newestDatas[i].device_id) {
                this.newestData = this.newestDatas[i];
              }
            }
            break;
          }
          case "device": {
            for (let i = 0; i < this.newestDatas.length; i++) {
              if (this.device.device_state == 1) {
                this.state = "在线";
              } else {
                this.state = "离线";
              }
            }
            break;
          }
        }
      }
    }
  }
}
