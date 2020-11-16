import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavItem } from "../services/nav-item";
import { NavService } from "../services/nav.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { rotateFlipToRight } from "ngx-router-animations";

@Component({
  selector: "app-home-layout",
  templateUrl: "./home-layout.component.html",
  styleUrls: ["./home-layout.component.scss"],
  animations: [
    trigger("rotateCubeToLeft", [
      transition(
        "One <=> Three,Three <=> Two,One<=>Two",
        useAnimation(rotateFlipToRight, {
          params: {
            enterTiming: "0.5",
            leaveTiming: "0.5",
            enterDelay: "0",
            leaveDelay: "0",
          },
        })
      ),
    ]),
  ],
})
export class HomeLayoutComponent {
  public screenWidth: number; //当前屏幕宽度
  @ViewChild("sidenav", null) sidenav: ElementRef;

  constructor(private navService: NavService) {
    this.screenWidth = window.innerWidth; //获取当前屏幕宽度
    window.onresize = () => {
      //TBS:本函数未起作用
      //web窗口宽度resize回调函数
      console.log("resize");
      this.screenWidth = window.innerWidth;
    };
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.sidenav;
  }

  public navItems: NavItem[] = [
    {
      displayName: "植物生长环境子平台",
      iconName: "spa",
      route: "plant",
    },
    {
      displayName: "人居环境监控子平台",
      iconName: "accessibility",
      route: "env",
    },
    {
      displayName: "小龙虾资源处理子平台",
      iconName: "build",
      route: "lobster",
    },
    {
      displayName: "实时监控",
      iconName: "video_library",
      route: "livevideo",
    },
    {
      displayName: "流程展示",
      iconName: "view_carousel",
      route: "gallery",
    },
    {
      displayName: "历史数据",
      iconName: "history",
      route: "history",
    },
    {
      displayName: "设备管理",
      iconName: "list",
      route: "history",
    },
    {
      displayName: "用户管理",
      iconName: "group",
      route: "history",
    },
  ];
}
