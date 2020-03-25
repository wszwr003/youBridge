import { Component } from "@angular/core";
import { NavItem } from "./services/nav-item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  navItems: NavItem[] = [
    {
      displayName: "系统概况",
      iconName: "account_balance",
      route: "sys"
    },
    {
      displayName: "设备管理",
      iconName: "format_list_bulleted",
      route: "devices",
      children: [
        {
          displayName: "环境传感网络",
          iconName: "blur_on",
          route: "devices/env",
          children: [
            {
              displayName: "5in1环境传感器1",
              iconName: "flare",
              route: "devices/env/:1"
            },
            {
              displayName: "5in1环境传感器2",
              iconName: "flare",
              route: "devices/env/:2"
            },
            {
              displayName: "5in1环境传感器3",
              iconName: "flare",
              route: "devices/env/:3"
            },
            {
              displayName: "5in1环境传感器4",
              iconName: "flare",
              route: "device/env/:4"
            }
          ]
        },
        {
          displayName: "空调",
          iconName: "wb_sunny",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "空气净化器",
          iconName: "cached",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "光时域反射仪",
          iconName: "sync_alt",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "小仪器仪表",
          iconName: "widgets",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "熔接机",
          iconName: "settings_input_component",
          route: "devfestfl/speakers/michael-prentice"
        }
      ]
    },
    {
      displayName: "业务管理",
      iconName: "group",
      route: "group",
      children: [
        {
          displayName: "业务员1",
          iconName: "person",
          route: "group/person"
        },
        {
          displayName: "业务员2",
          iconName: "person",
          route: "group/person"
        },
        {
          displayName: "业务员3",
          iconName: "person",
          route: "group/person"
        },
        {
          displayName: "业务员4",
          iconName: "person",
          route: "group/person"
        }
      ]
    }
  ];
}
