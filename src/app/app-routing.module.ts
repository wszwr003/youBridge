import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { OverViewComponent } from "./over-view/over-view.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { MutisensorsViewComponent } from "./mutisensors-view/mutisensors-view.component";
const routes: Routes = [
  //   { path: "mutisensor/:deviceId", component: MutisensorViewComponent },
  //   { path: "", component: MutisensorViewComponent },
  //   { path: "overview", component: OverViewComponent },
  //   {
  //     path: "devices",
  //     children: [
  //       {
  //         path: "env",
  //         children: [{ path: ":deviceID", component: MutisensorViewComponent }]
  //       }
  //     ]
  //   }
  // ];
  {
    path: "",
    component: HomeLayoutComponent,
    //canActivate: [AuthGuardService],
    children: [
      {
        path: "sys",
        component: OverViewComponent,
        data: { animationState: "One" },
      },
      {
        path: "devices/env",
        component: MutisensorsViewComponent,
        data: { animationState: "Two" },
      },
      {
        path: "devices/env/:deviceId",
        component: MutisensorViewComponent,
        data: { animationState: "Three" },
      },
    ],
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent,
      },
    ],
  },
  { path: "**", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
