import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [];
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
