import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DeviceService } from "../services/device.service";
import { Sensor5in1Service } from "../services/sensor5in1.service";
@Component({
  selector: "app-mutisensor-view",
  templateUrl: "./mutisensor-view.component.html",
  styleUrls: ["./mutisensor-view.component.scss"],
})
export class MutisensorViewComponent implements OnInit {
  public deviceId;
  constructor(
    private route: ActivatedRoute,
    private _deviceService: DeviceService,
    private _sensor5in1Service: Sensor5in1Service
  ) {}

  ngOnInit() {
    //获取当前页面的(设备id)来显示不同的设备页面和数据
    //FAO!!!TBS!!!TODO:!!!FIXME:!!!
    //ngOnInit不同的参数子界面,只会初始化一次!!!!!!!!
    //需要放到订阅中处理每次载入子界面才会调用!!!!!!!
    this.route.paramMap.subscribe((params) => {
      this.deviceId = params.get("deviceId");
    });
  }

  ngOnDestroy() {}
}
