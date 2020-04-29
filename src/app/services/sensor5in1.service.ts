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
  private sensorDataUrl = "/sensor5in1/data";
  private sensorDatasUrl = "/sensor5in1/datas";
  private sensorsDataUrl = "/sensor5in1/all/data";
  private testDeviceId = { device_id: "861011047486233" };

  private HTTP_SERVICE_OPTIONS: any = {
    // URL: "http://127.0.0.1:4000",
    URL: "http://116.62.151.59:4000",
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
        // console.log(">>>>Sensor5in1Service>>>>");
        // console.log("subSensorData:", this.subSensorData);
        // console.log("<<<<Sensor5in1Service<<<<");
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

  getNewestSensorData(deviceId: object): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.sensorDataUrl;
    return this._httpClient.post(url, deviceId);
  }
  getSensorDatas(deviceId: object): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.sensorDatasUrl;
    return this._httpClient.post(url, deviceId);
  }
  getNewestSensorsData(): Observable<Object> {
    const url = this.HTTP_SERVICE_OPTIONS.URL + this.sensorsDataUrl;
    return this._httpClient.post(url, null);
  }
  //notuse-验证会不会新建实例,还是同时只能一个实例,TBS:创建观察对象到底是写在构造函数好,还是通过函数调用好?
  subNewestSensorsData(): Observable<IMqttMessage> {
    return this._mqttService.observe(this.dataTopic);
  }
}
