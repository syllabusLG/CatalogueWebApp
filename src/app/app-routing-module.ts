import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProduitsComponent} from "./produits/produits.component";

export const appRoutes: Routes = [
  {path:"products/:urlProds", component: ProduitsComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
