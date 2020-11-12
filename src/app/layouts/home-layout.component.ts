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
      displayName: "植物生长环境平台",
      iconName: "spa",
      route: "plant",
    },
    {
      displayName: "人居环境监控平台",
      iconName: "accessibility",
      route: "env",
    },
    {
      displayName: "小龙虾资源处理平台",
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
      route: "test",
    },
    {
      displayName: "设备管理",
      iconName: "list",
      route: "devices",
      children: [
        {
          displayName: "环境传感设备",
          //iconName: "blur_on",
          route: "devices",
          children: [
            {
              displayName: "传感器1",
              //iconName: "",
              route: "devices/env/861011047485599",
            },
            {
              displayName: "传感器2",
              //iconName: "",
              route: "devices/env/861011047486209",
            },
            {
              displayName: "传感器3",
              //iconName: "",
              route: "devices/env/861011047486233",
            },
            {
              displayName: "传感器4",
              //iconName: "",
              route: "devices/env/861011047455360",
            },
            {
              displayName: "传感器5",
              //iconName: "",
              route: "devices/env/861011047418186",
            },
            {
              displayName: "传感器6",
              //iconName: "",
              route: "devices/env/861011047485565",
            },
            {
              displayName: "传感器7",
              //iconName: "",
              route: "devices/env/861011047486134",
            },
            {
              displayName: "传感器8",
              //iconName: "",
              route: "devices/env/861011047485656",
            },
            {
              displayName: "传感器9",
              //iconName: "",
              route: "devices/env/861011047511899",
            },
            {
              displayName: "传感器10",
              //iconName: "",
              route: "devices/env/861011047486225",
            },
          ],
        },
        {
          displayName: "空调",
          //iconName: "wb_sunny",
          route: "test",
        },
        {
          displayName: "空气净化器",
          //iconName: "cached",
          route: "test",
        },
      ],
    },
    {
      displayName: "用户管理",
      iconName: "group",
      route: "test",
      children: [
        {
          displayName: "用户1",
          iconName: "person",
          route: "test",
        },
        {
          displayName: "用户2",
          iconName: "person",
          route: "test",
        },
        {
          displayName: "用户3",
          iconName: "person",
          route: "test",
        },
        {
          displayName: "用户4",
          iconName: "person",
          route: "test",
        },
      ],
    },
  ];
}
