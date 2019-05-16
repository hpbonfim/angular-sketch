// IMPORT "CANACTIVATE" GUARD MODULE
import { SecureInnerPagesGuard } from "../guard/secure-inner-pages.guard";
// ANGULAR CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// PUBLIC ROUTES  MODULES
import { InfoPublicComponent } from 'src/app/components/public/info/info.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { HomePublicComponent } from 'src/app/components/public/home/home.component';
import { EsqueceuSenhaComponent } from 'src/app/components/public/esqueceu-senha/esqueceu-senha.component';

// ROUTES
const routes: Routes = [
  { path: '*', redirectTo: '/login', pathMatch: 'full'},
  { path: 'info', component: InfoPublicComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'home', component: HomePublicComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent, canActivate: [SecureInnerPagesGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppPublicRoutingModule { }