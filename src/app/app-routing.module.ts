import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { OverViewComponent } from "./over-view/over-view.component";
const routes: Routes = [
  { path: "mutisensor/:deviceId", component: MutisensorViewComponent },
  { path: "", component: MutisensorViewComponent },
  { path: "overview", component: OverViewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
