import { Injectable, OnDestroy } from "@angular/core";
import { Device } from "./device";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DeviceService implements OnDestroy {
  public deviceNum = -1; //注册设备总数
  public onLineNum = -1; //在线设备数量
  public offLineNum = -1; //离线设备数量
  public faultNum = -1; //故障设备数量
  public devicesInfo: Device[]; //所有设备信息!

  private intervalTick;
  private intervalTime = 10000;
  private devicesUrl = "/device/all/info";
  private HTTP_SERVICE_OPTIONS: any = {
    // URL: "http://127.0.0.1:4000",
    URL: "http://116.62.151.59:4000",
  };
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private _httpClient: HttpClient) {
    console.log("get devices interval start!");
    this.getAllDeviceInf().subscribe((devices: Array<Device>) => {
      this.deviceNum = devices.length;
      this.devicesInfo = devices;
      var online = 0;
      var offline = 0;
      var fault = 0;
      devices.forEach((element) => {
        if (element.device_state == 1) {
          online++;
        } else if (element.device_state == 0) {
          offline++;
        } else if (element.device_state == -1) {
          fault++;
        }
      });
      this.onLineNum = online;
      this.offLineNum = offline;
      this.faultNum = fault;
    });
    this.intervalTick = setInterval(() => {
      this.getAllDeviceInf().subscribe((devices: Array<Device>) => {
        this.deviceNum = devices.length;
        this.devicesInfo = devices;
        var online = 0;
        var offline = 0;
        var fault = 0;
        devices.forEach((element) => {
          if (element.device_state == 1) {
            online++;
          } else if (element.device_state == 0) {
            offline++;
          } else if (element.device_state == -1) {
            fault++;
          }
        });
        this.onLineNum = online;
        this.offLineNum = offline;
        this.faultNum = fault;
      });
      // console.log(">>>>DeviceService>>>>");
      // console.log(
      //   "deviceNum:",
      //   this.deviceNum,
      //   ",online:",
      //   this.onLineNum,
      //   ",offline:",
      //   this.offLineNum,
      //   ",fault:",
      //   this.faultNum
      // );
      // console.log("devicesInfo:", this.devicesInfo);
      // console.log("<<<<DeviceService<<<<");
    }, this.intervalTime);
  }

  ngOnDestroy(): void {
    console.log("get devices interval stop!");
    clearInterval(this.intervalTick);
  }

  public getAllDeviceInf(): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.devicesUrl;
    return this._httpClient.post(url, null, this.httpOptions);
  }
}
