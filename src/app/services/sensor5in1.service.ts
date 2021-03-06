import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { MqttService, IMqttMessage } from "ngx-mqtt";
import { SensorData } from "./sensor5in1";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class Sensor5in1Service implements OnDestroy {
  public subSensorData: SensorData;
  private dataTopic = "data";
  private subscription: Subscription;
  private airDataUrl = "/air/data";
  private airDatasUrl = "/air/datas";
  private dustDataUrl = "/dust/data";
  private dustDatasUrl = "/dust/datas";
  private sensorsDataUrl = "/sensor5in1/all/data";
  private testDeviceId = { device_id: "861011047486233" };

  private HTTP_SERVICE_OPTIONS: any = {
    // URL: "http://127.0.0.1:4000",
    URL: "http://47.101.57.243:4000",
  };
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(
    private _mqttService: MqttService,
    private _httpClient: HttpClient
  ) {
    this.subscription = this._mqttService
      .observe(this.dataTopic)
      .subscribe((message: IMqttMessage) => {
        this.subSensorData = JSON.parse(message.payload.toString());
        console.log(">>>>Sensor5in1Service>>>>");
        console.log("subSensorData:", this.subSensorData);
        console.log("<<<<Sensor5in1Service<<<<");
      });
    console.log("mqtt data subscribe start!");
    ////Test API
    // setInterval(() => {
    //   this.getNewestSensorData(this.testDeviceId).subscribe((data) => {
    //     console.log("DBNewestSensorData", data);
    //   });
    //   this.getSensorDatas(this.testDeviceId).subscribe((data) => {
    //     console.log("DBSensorDatas:", data);
    //   });
    //   this.getNewestSensorsData().subscribe((data) => {
    //     console.log("DBNewestSensorsData:", data);
    //   });
    // }, 10000);
    ////Test API
  }

  ngOnDestroy(): void {
    console.log("mqtt data unsbuscribe stop!");
    this.subscription.unsubscribe();
  }

  getAirSensorData(deviceId: object): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.airDataUrl;
    return this._httpClient.post(url, deviceId);
  }
  getAirSensorDatas(deviceId: object): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.airDatasUrl;
    return this._httpClient.post(url, deviceId);
  }
  getDustSensorData(deviceId: object): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.dustDataUrl;
    return this._httpClient.post(url, deviceId);
  }
  getDustSensorDatas(deviceId: object): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.dustDatasUrl;
    return this._httpClient.post(url, deviceId);
  }
  getNewestSensorsData(): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.sensorsDataUrl;
    return this._httpClient.post(url, null);
  }
  //notuse-???????????????????????????,??????????????????????????????,TBS:????????????????????????????????????????????????,????????????????????????????
  subNewestSensorsData(): Observable<IMqttMessage> {
    return this._mqttService.observe(this.dataTopic);
  }
}
