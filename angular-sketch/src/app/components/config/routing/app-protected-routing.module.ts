// IMPORT "CANACTIVATE" GUARD MODULE
import { AuthGuard } from "../guard/auth.guard";
// ANGULAR CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// PROTECTED ROUTES MODULES
import { VerificarEmailComponent } from '../../protected/verificar-email/verificar-email.component';
import { RegistrarComponent } from '../../protected/registrar/registrar.component';
import { TarefasComponent } from '../../protected/tarefas/tarefas.component';
import { HomeComponent } from '../../protected/home/home.component';
import { InfoComponent } from '../../protected/info/info.component';
import { DashboardComponent } from '../../protected/dashboard/dashboard.component';

// ROUTES
const routes: Routes = [
  { path: 'dashboard/verificacao-email', component: VerificarEmailComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/registrar' , component: RegistrarComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/tarefas', component: TarefasComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/home' , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/info' , component: InfoComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '*', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppProtectedRoutingModule { }