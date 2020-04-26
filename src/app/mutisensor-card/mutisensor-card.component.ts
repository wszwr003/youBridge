import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Device } from "../services/device";
import { SensorData } from "../services/sensor5in1";

@Component({
  selector: "app-mutisensor-card",
  templateUrl: "./mutisensor-card.component.html",
  styleUrls: ["./mutisensor-card.component.scss"],
})
export class MutisensorCardComponent implements OnChanges {
  @Input() deviceId: string = "861011047418186";
  @Input() devices: Device[];
  @Input() newestData: SensorData = null;
  public vocString = "-";
  public co2String = "---";
  public pm25String = "---";
  public tempString = "---";
  public humiString = "---";
  public timeString = "---";

  public device: Device = null;
  public state: string = "离线";
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "deviceId": {
            break;
          }
          case "newestData": {
            if (this.newestData == undefined) break;
            if (this.newestData.device_id != this.deviceId) break;
            console.log(this.newestData.device_id);
            if (this.newestData.voc_lvl == 0) this.vocString = "优";
            else if (this.newestData.voc_lvl == 1) this.vocString = "良";
            else if (this.newestData.voc_lvl == 2) this.vocString = "差";
            else this.vocString = "error";
            this.co2String = this.newestData.co2.toString();
            this.pm25String = this.newestData.pm25.toString();
            this.tempString = this.newestData.temp.toString();
            this.humiString = this.newestData.humi.toString();
            this.timeString = this.newestData.time.toString();

            break;
          }
          case "devices": {
            if (this.devices == undefined) break;
            for (let i = 0; i < this.devices.length; i++) {
              const device = this.devices[i];
              if (device.device_no == this.deviceId) {
                this.device = device;
              }
            }
            break;
          }
        }
      }
    }
  }
}
