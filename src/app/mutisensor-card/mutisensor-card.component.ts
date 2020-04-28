import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from "@angular/core";
import { Device } from "../services/device";
import { SensorData } from "../services/sensor5in1";
import { Sensor5in1Service } from "../services/sensor5in1.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-mutisensor-card",
  templateUrl: "./mutisensor-card.component.html",
  styleUrls: ["./mutisensor-card.component.scss"],
})
export class MutisensorCardComponent implements OnChanges, OnDestroy {
  @Input() deviceId: string = "861011047486134";
  @Input() devices: Device[];
  @Input() newestData: SensorData = null;
  public initMyData: SensorData = null;
  public vocString = "...";
  public co2String = "...";
  public pm25String = "...";
  public tempString = "...";
  public humiString = "...";
  public timeString = "读取中";
  public subscription: Subscription;
  public device: Device = null;
  public state: string = "离线";
  constructor(private _sensor5in1Service: Sensor5in1Service) {}
  ngOnDestroy(): void {
    try {
      this.subscription.unsubscribe();
    } catch {}
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "deviceId": {
            console.log("deviceId");
            try {
              this.subscription.unsubscribe();
            } catch {}
            this.subscription = this._sensor5in1Service
              .getNewestSensorData({ device_id: this.deviceId })
              .subscribe((data: SensorData[]) => {
                this.initMyData = data[0];
                setTimeout(() => {
                  if (this.initMyData.voc_lvl == 0) this.vocString = "优";
                  else if (this.initMyData.voc_lvl == 1) this.vocString = "良";
                  else if (this.initMyData.voc_lvl == 2) this.vocString = "差";
                  else this.vocString = "...";
                  try {
                    this.co2String = this.initMyData.co2.toString();
                    this.pm25String = this.initMyData.pm25.toString();
                    this.tempString = this.initMyData.temp.toString();
                    this.humiString = this.initMyData.humi.toString();
                    var unixTimestamp =
                      this.initMyData.time == undefined
                        ? new Date()
                        : new Date(this.initMyData.time.toString());

                    this.timeString = unixTimestamp.toLocaleString();
                  } catch (error) {
                    console.log("!!!!", error);
                  }
                }, 1500);
              });
            break;
          }
          case "newestData": {
            console.log("newestData");
            if (this.newestData == undefined) break;
            if (this.newestData.device_id != this.deviceId) break;
            if (this.newestData.voc_lvl == 0) this.vocString = "优";
            else if (this.newestData.voc_lvl == 1) this.vocString = "良";
            else if (this.newestData.voc_lvl == 2) this.vocString = "差";
            else this.vocString = "error";
            this.co2String = this.newestData.co2.toString();
            this.pm25String = this.newestData.pm25.toString();
            this.tempString = this.newestData.temp.toString();
            this.humiString = this.newestData.humi.toString();
            var unixTimestamp =
              this.newestData.time == undefined
                ? new Date()
                : new Date(this.newestData.time * 1000);
            this.timeString = unixTimestamp.toLocaleString();
            break;
          }
          case "devices": {
            console.log("devices");

            if (this.devices == undefined) break;
            setTimeout(() => {
              for (let i = 0; i < this.devices.length; i++) {
                const device = this.devices[i];
                if (device.device_no == this.deviceId) {
                  this.device = device;
                }
              }
            }, 1000);
            break;
          }
        }
      }
    }
  }
}
