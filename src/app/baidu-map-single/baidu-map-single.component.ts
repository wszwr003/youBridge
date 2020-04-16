import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import {
  MapOptions,
  Point,
  MarkerOptions,
  MapTypeEnum,
} from "angular2-baidu-map";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-baidu-map-single",
  templateUrl: "./baidu-map-single.component.html",
  styleUrls: ["./baidu-map-single.component.scss"],
})
export class BaiduMapSingleComponent {
  @Output() notify = new EventEmitter<string>(); //output component
  options: MapOptions;
  marker: { point: Point; options?: MarkerOptions };
  newmark: any;

  constructor() {
    this.marker = {
      options: {
        title:"",
      },
      point: {
        lat: 30.5761,
        lng: 120.678724,
      },
    };
    this.options = {
      centerAndZoom: {
        lat: 30.5761, //   - ^  +  V
        lng: 120.678624, // - >  +  <
        zoom: 18,
      },
      mapType: MapTypeEnum.BMAP_NORMAL_MAP,
      //enableScrollWheelZoom: true,
      enableKeyboard: true,
    };
  }
}
