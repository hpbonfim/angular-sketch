import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasComponent } from 'src/app/tarefas/tarefas.component';
import { HomeComponent } from 'src/app/home/home.component';
import { InfoComponent } from 'src/app/info/info.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'tarefas' , component: TarefasComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'info' , component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
