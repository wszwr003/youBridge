import { Component, OnInit } from "@angular/core";
import { HttpService } from "./services/http.service";
import { Device } from "./services/device";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}
  ngOnInit(): void {
    //从服务器获取设备位置(非实时)和其他的设备信息
    // this.http.postHttp("/get-all-device", {}).subscribe((devices: Device[]) => {
    //   console.log(devices);
    // });
    //定时获取设备状态
  }
}
