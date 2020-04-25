import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../services/device.service";
import { Sensor5in1Service } from "../services/sensor5in1.service";

@Component({
  selector: "app-mutisensors-view",
  templateUrl: "./mutisensors-view.component.html",
  styleUrls: ["./mutisensors-view.component.scss"],
})
export class MutisensorsViewComponent implements OnInit {
  constructor(
    private _deviceService: DeviceService,
    private _sensor5in1Service: Sensor5in1Service
  ) {}
  ngOnInit() {
    //初始化时获取所有设备参数和状态
    //通过post方式从mysql服务器获取不同设备的数据库最新数据
    //订阅:MQTT服务器的data主题获取不同设备实时数据 FAO:destory
    //定时任务:获取所有设备参数和状态 FAO:destory
  }

  ngOnDestroy() {}
}
