import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePublicComponent } from 'src/app/home/home.component';
import { InfoPublicComponent } from 'src/app/info/info.component';

import { AppRoutingModule } from 'src/app/shared/routing/app-routing.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home' , component: HomePublicComponent},
  {path: 'info' , component: InfoPublicComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppRoutingModule],
  exports: [RouterModule]
})
export class AppRouterModule { }
