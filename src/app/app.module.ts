import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';                        // 路由模块
import { BrowserModule } from '@angular/platform-browser';                      // 应用浏览器支持
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 浏览器动画支持
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';                   // topBar
import { MatSidenavModule } from '@angular/material/sidenav';                   // sideNav
import { MatMenuModule } from '@angular/material/menu';                         // menu
import { MatProgressBarModule } from '@angular/material/progress-bar';          // progressBar
import { MatButtonModule } from '@angular/material/button';                     // button
import { MatIconModule } from '@angular/material/icon';                         // icons
import { MatListModule } from '@angular/material';

import { AppComponent } from './app.component';                                 // 根组件
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';                  // topBar组件

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideMenuComponent,
    ProgressBarComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
