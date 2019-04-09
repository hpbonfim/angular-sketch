// APP MODULES
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
// REACTIVE FORMS MODULE
import { ReactiveFormsModule } from "@angular/forms";
// APP COMPONENTS MODULES
import { AppRouterModule } from './app-routing.module';
import { AppRoutingModule } from './shared/routing/app-routing.module';
//FIREBASE MODULES
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
//TOASTR POP-UP MODULES
import { ToastrModule } from 'ngx-toastr';
//PUBLIC MODULE
import { InfoPublicComponent } from './info/info.component';
import { HomePublicComponent } from './home/home.component';
//USER MODULE
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EsqueceuSenhaComponent } from './components/esqueceu-senha/esqueceu-senha.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';
//TAREFAS MODULE
import { TarefasComponent } from 'src/app/components/tarefas/tarefas.component';
import { TarefaComponent } from 'src/app/components/tarefas/tarefa/tarefa.component';
import { ListaTarefasComponent } from 'src/app/components/tarefas/lista-tarefas/lista-tarefas.component';

// Auth service
import { AuthService } from "./shared/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    InfoPublicComponent,
    HomePublicComponent,
    TarefasComponent,
    TarefaComponent,
    ListaTarefasComponent,
    InfoComponent,
    HomeComponent,
    LoginComponent,
    RegistrarComponent,
    DashboardComponent,
    EsqueceuSenhaComponent,
    VerificarEmailComponent
  ],
  imports: [
    BrowserModule, // IMPORT BROWSER CONFIG
    AppRouterModule, // IMPORT ROUTES
    AppRoutingModule, // IMPORT SECURITY ROUTES
    AngularFireModule.initializeApp(environment.firebase), // IMPORT CONFIG & START FIREBASE
    AngularFireAuthModule, // IMPORT FIREAUTH MODULES
    AngularFirestoreModule, // INICIALIZE FIRESTORM CONNECTION
    FormsModule, // IMPORT FORMS MODULE
    BrowserAnimationsModule, // IMPORT BROWSER ANIMATIONS
    ToastrModule.forRoot(), // IMPORT POP UP CONFIG MODULE
    ReactiveFormsModule, // IMPORT REACT FORMS MODULE
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
