import { Component } from "@angular/core";
import { NavItem } from "../services/nav-item";

@Component({
  selector: "app-home-layout",
  template: `
    <ng-container>
      <app-top-bar
        class="header"
        (sideMenuButton)="sidenav.toggle()"
      ></app-top-bar>
      <app-progress-bar class="progress"></app-progress-bar>
      <mat-sidenav-container class="container">
        <mat-sidenav #sidenav mode="side" class="sidenav" opened>
          <mat-nav-list>
            <app-side-menu
              *ngFor="let item of navItems"
              [item]="item"
            ></app-side-menu>
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <router-outlet></router-outlet>
          <div fxLayout fxLayoutAlign="center center">
            <p>版权所有© 上海光维通信技术股份有限公司</p>
          </div>
          <div #msglog></div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </ng-container>
  `,
  styleUrls: ["./home-layout.component.scss"]
})
export class HomeLayoutComponent {
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
          displayName: "环境传感设备",
          //iconName: "blur_on",
          route: "devices/env",
          children: [
            {
              displayName: "环境传感器1(486233)",
              //iconName: "",
              route: "devices/env/861011047486233"
            },
            {
              displayName: "环境传感器2(455360)",
              //iconName: "",
              route: "devices/env/861011047455360"
            },
            {
              displayName: "环境传感器3(485656)",
              //iconName: "",
              route: "devices/env/861011047485656"
            },
            {
              displayName: "环境传感器4(485565)",
              //iconName: "",
              route: "devices/env/861011047485565"
            },
            {
              displayName: "环境传感器5(418186)",
              //iconName: "",
              route: "devices/env/861011047418186"
            },
            {
              displayName: "环境传感器6(485599)",
              //iconName: "",
              route: "devices/env/861011047485599"
            },
            {
              displayName: "环境传感器7(486225)",
              //iconName: "",
              route: "devices/env/861011047486225"
            },
            {
              displayName: "环境传感器8(486134)",
              //iconName: "",
              route: "devices/env/861011047486134"
            },
            {
              displayName: "环境传感器9(511899)",
              //iconName: "",
              route: "devices/env/861011047511899"
            },
            {
              displayName: "环境传感器10(486209)",
              //iconName: "",
              route: "devices/env/861011047486209"
            }
          ]
        },
        {
          displayName: "空调",
          //iconName: "wb_sunny",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "空气净化器",
          //iconName: "cached",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "光时域反射仪",
          //iconName: "sync_alt",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "小仪器仪表",
          //iconName: "widgets",
          route: "devfestfl/speakers/michael-prentice"
        },
        {
          displayName: "熔接机",
          //iconName: "settings_input_component",
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
