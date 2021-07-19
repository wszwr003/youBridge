import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Device } from "../services/device";
import { SensorData } from "../services/sensor5in1";
import { Sensor5in1Service } from "../services/sensor5in1.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dustsensor-card",
  templateUrl: "./dustsensor-card.component.html",
  styleUrls: ["./dustsensor-card.component.scss"],
})
export class DustsensorCardComponent implements OnChanges, OnDestroy {
  @Input() deviceId: string = "864308043364126";
  @Input() newestData: SensorData = null;
  public initMyData: SensorData = null;
  public Air_T = "...";
  public Air_H = "...";
  public Soil_Temperature = "...";
  public Water_Height = "...";
  public CO2 = "...";
  public Shine = "...";
  public PH = "...";
  public Conductivity = "...";
  public timeString = "读取中";
  public subscription: Subscription;
  public device: Device = null;
  public state: string = "离线";
  public screenWidth;
  constructor(private _sensor5in1Service: Sensor5in1Service) {
    this.screenWidth = window.innerWidth; //获取当前屏幕宽度
    window.onresize = () => {
      //TBS:本函数未起作用
      //web窗口宽度resize回调函数
      console.log("resize");
      this.screenWidth = window.innerWidth;
    };
  }
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
              .getDustSensorData({ device_id: this.deviceId })
              .subscribe((data: SensorData[]) => {
                this.initMyData = data[0];
                setTimeout(() => {
                  try {
                    this.Air_T = this.initMyData.Air_T.toString();
                    this.Air_H = this.initMyData.Air_H.toString();
                    this.Soil_Temperature = this.initMyData.Soil_Temperature.toString();
                    this.CO2 = this.initMyData.CO2.toString();
                    this.Shine = this.initMyData.Shine.toString();
                    this.PH = this.initMyData.PH.toString();
                    this.Conductivity = this.initMyData.Conductivity.toString();
                    var unixTimestamp =
                    this.initMyData.time == undefined
                    ? new Date()
                    : new Date(this.initMyData.time.toString());
                    
                    this.timeString = unixTimestamp.toLocaleString();
                    this.Water_Height = this.initMyData.Water_Height.toString();
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
            this.Air_T = this.newestData.Air_T.toString();
            this.Air_H = this.newestData.Air_H.toString();
            this.Soil_Temperature = this.newestData.Soil_Temperature.toString();
            this.CO2 = this.newestData.CO2.toString();
            this.Shine = this.newestData.Shine.toString();
            this.PH = this.newestData.PH.toString();
            this.Conductivity = this.newestData.Conductivity.toString();
            var unixTimestamp =
            this.newestData.time == undefined
            ? new Date()
            : new Date(this.newestData.time * 1000);
            this.timeString = unixTimestamp.toLocaleString();
            this.Water_Height = this.newestData.Water_Height.toString();
            break;
          }
        }
      }
    }
  }
}
