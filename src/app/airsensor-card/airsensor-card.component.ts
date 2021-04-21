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
  selector: "app-airsensor-card",
  templateUrl: "./airsensor-card.component.html",
  styleUrls: ["./airsensor-card.component.scss"],
})
export class AirsensorCardComponent implements OnChanges, OnDestroy {
  @Input() deviceId: string = "864308043896812";
  @Input() newestData: SensorData = null;
  public initMyData: SensorData = null;
  public Air_T = "...";
  public Air_H = "...";
  public PM25 = "...";
  public PM10 = "...";
  public VOC = "...";
  public Noise = "...";
  public H2S = "...";
  public Shine = "...";
  public Speed = "...";
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
              .getAirSensorData({ device_id: this.deviceId })
              .subscribe((data: SensorData[]) => {
                this.initMyData = data[0];
                setTimeout(() => {
                  try {
                    this.Air_T = this.initMyData.Air_T.toString();
                    this.Air_H = this.initMyData.Air_H.toString();
                    this.PM25 = this.initMyData.PM25.toString();
                    this.PM10 = this.initMyData.PM10.toString();
                    this.Noise = this.initMyData.Noise.toString();
                    this.H2S = this.initMyData.H2S.toString();
                    this.Shine = this.initMyData.Shine.toString();
                    this.Speed = this.initMyData.Speed.toString();
                    var unixTimestamp =
                    this.initMyData.time == undefined
                    ? new Date()
                    : new Date(this.initMyData.time.toString());
                    
                    this.timeString = unixTimestamp.toLocaleString();
                    this.VOC = this.initMyData.VOC.toString();
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
            this.PM25 = this.newestData.PM25.toString();
            this.PM10 = this.newestData.PM10.toString();
            this.Noise = this.newestData.Noise.toString();
            this.H2S = this.newestData.H2S.toString();
            this.Shine = this.newestData.Shine.toString();
            this.Speed = this.newestData.Speed.toString();
            var unixTimestamp =
            this.newestData.time == undefined
            ? new Date()
            : new Date(this.newestData.time * 1000);
            this.timeString = unixTimestamp.toLocaleString();
            this.VOC = this.newestData.VOC.toString();
            break;
          }
        }
      }
    }
  }
}
