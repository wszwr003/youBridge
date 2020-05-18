import { Component, OnDestroy, OnChanges, OnInit } from "@angular/core";
import { DeviceService } from "../services/device.service";
import { Sensor5in1Service } from "../services/sensor5in1.service";
import { SensorData } from "../services/sensor5in1";

@Component({
  selector: "app-over-view",
  templateUrl: "./over-view.component.html",
  styleUrls: ["./over-view.component.scss"],
})
export class OverViewComponent implements OnInit, OnDestroy, OnChanges {
  public device_id = "861011047485599";
  constructor(
    public _deviceService: DeviceService,
    public _sensor5in1Service: Sensor5in1Service
  ) {

  }
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
  }
}
