import { Component, OnDestroy, OnChanges, OnInit } from "@angular/core";
import { DeviceService } from "../services/device.service";
import { Sensor5in1Service } from "../services/sensor5in1.service";
import { GPS, SensorData } from "../services/sensor5in1";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-over-view",
  templateUrl: "./over-view.component.html",
  styleUrls: ["./over-view.component.scss"],
})
export class OverViewComponent implements OnInit, OnDestroy, OnChanges {
  location: GPS = {
    deviceId: "864308043896812",
    lat: 30.703943,
    lng: 120.890919,
    locString: "地址：由桥村",
  };
  public device_id = "864308043896812";
  public historyDatas = null;
  constructor(
    private route: ActivatedRoute,
    public _deviceService: DeviceService,
    public _sensor5in1Service: Sensor5in1Service
  ) {}
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("overview changes in");
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "": {
          }
        }
      }
    }
  }

  onNotify(device_id) {
    //father component
    //window.alert(device_id);
    this.device_id = device_id;
    //地图点击事件,获取特定传感器数据
  }
  ngOnDestroy() {}

  ngOnInit() {
    //初始化时获取所有设备参数和状态
    //订阅MQTT服务器的data主题
    //通过post方式从mysql服务器获取历史数据
    //定时任务:获取所有设备参数和状态 FAO:destory
    this.route.paramMap.subscribe((params) => {
      this.historyDatas = this._sensor5in1Service
        .getSensorDatas({ device_id: this.device_id })
        .subscribe((datas: SensorData[]) => {
          this.historyDatas = datas;
          // console.log("!!historyDatas:", datas);
        });
    });
  }
}
