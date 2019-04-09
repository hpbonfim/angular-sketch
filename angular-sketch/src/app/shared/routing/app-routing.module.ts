// ANGULAR CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// PUBLIC ROUTES  MODULES
import { LoginComponent } from '../../components/login/login.component';
import { RegistrarComponent } from '../../components/registrar/registrar.component';
import { EsqueceuSenhaComponent } from '../../components/esqueceu-senha/esqueceu-senha.component';
import { VerificarEmailComponent } from '../../components/verificar-email/verificar-email.component';
// AUTH ROUTES MODULES
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TarefasComponent } from 'src/app/components/tarefas/tarefas.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { InfoComponent } from 'src/app/components/info/info.component';

// IMPORT "CANACTIVATE" GUARD MODULE
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";

// ROUTES
const routes: Routes = [
  { path: '*', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard/home' , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/info' , component: InfoComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/tarefas', component: TarefasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'registrar', component: RegistrarComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verificacao-email', component: VerificarEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }