import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPublicRoutingModule } from 'src/app/components/config/routing/app-public-routing.module';
import { AppProtectedRoutingModule } from 'src/app/components/config/routing/app-protected-routing.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppProtectedRoutingModule, AppPublicRoutingModule],
  exports: [RouterModule]
})

export class AppRouterModule { }
