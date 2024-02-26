import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZolozComponent} from "./zoloz/zoloz.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: "zoloz/:clientCfg", component: ZolozComponent, pathMatch: "full" },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
