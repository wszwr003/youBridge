import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module"; // 路由模块
import { BrowserModule } from "@angular/platform-browser"; // 应用浏览器支持
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // 浏览器动画支持
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar"; // topBar
import { MatSidenavModule } from "@angular/material/sidenav"; // sideNav
import { MatMenuModule } from "@angular/material/menu"; // menu
import { MatProgressBarModule } from "@angular/material/progress-bar"; // progressBar
import { MatButtonModule } from "@angular/material/button"; // button
import { MatIconModule } from "@angular/material/icon"; // icons
import { MatListModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";

import { FlexLayoutModule } from "@angular/flex-layout";
import { BaiduMapModule } from "angular2-baidu-map";

import { AppComponent } from "./app.component"; // 根组件
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { DataChartComponent } from "./data-chart/data-chart.component";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { BaiduMapComponent } from "./baidu-map/baidu-map.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { MouseEnterSetbleDirective } from './directives/mouse-enter-setble.directive';
import { OverViewComponent } from './over-view/over-view.component';
import { OverviewD3Component } from './over-view/overview-d3/overview-d3.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideMenuComponent,
    ProgressBarComponent,
    DataChartComponent,
    MutisensorViewComponent,
    BaiduMapComponent,
    DataTableComponent,
    MouseEnterSetbleDirective,
    OverViewComponent,
    OverviewD3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    BaiduMapModule.forRoot({ ak: "FpVG0ppOSI7TwBYGhty65bxe88fqD38v" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
