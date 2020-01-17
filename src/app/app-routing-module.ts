import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProduitsComponent} from "./produits/produits.component";
import {LoginComponent} from "./login/login.component";

export const appRoutes: Routes = [
  {path:"products/:urlProds", component: ProduitsComponent},
  {path:"login", component: LoginComponent}
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
