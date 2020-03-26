import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { OverViewComponent } from "./over-view/over-view.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { AuthGuardService } from "./services/auth-guard.service";
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
    canActivate: [AuthGuardService],
    children: [
      {
        path: "sys",
        component: OverViewComponent
      },
      {
        path: "devices/env/:deviceId",
        component: MutisensorViewComponent
      }
    ]
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent
      }
    ]
  },
  { path: "**", redirectTo: "" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
