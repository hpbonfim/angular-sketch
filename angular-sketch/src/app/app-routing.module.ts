import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasComponent } from 'src/app/tarefas/tarefas.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/'},
	{path: 'tarefas' , component: TarefasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
