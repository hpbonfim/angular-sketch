// APP MODULES
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FIREBASE MODULES
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

//TOASTR POP-UP MODULES
import { ToastrModule } from 'ngx-toastr';

//TAREFAS MODULE
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefaComponent } from './tarefas/tarefa/tarefa.component';
import { ListaTarefasComponent } from './tarefas/lista-tarefas/lista-tarefas.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ListaTarefasComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // IMPORT BROWSER CONFIG
    AppRoutingModule, // IMPORT ROUTES
    AngularFireModule.initializeApp(environment.firebase), // IMPORT FIREBASE CONFIG
    AngularFirestoreModule, // INICIALIZE FIRESTORM CONNECTION
    FormsModule, // IMPORT FORMS MODULE CONFIG
    BrowserAnimationsModule, // IMPORT BROWSER ANIMATIONS
    ToastrModule.forRoot() // IMPORT POP UP CONFIG MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
