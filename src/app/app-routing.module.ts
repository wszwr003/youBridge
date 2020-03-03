import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";

const routes: Routes = [
  { path: "", component: MutisensorViewComponent },
  { path: "mutisensor", component: MutisensorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
