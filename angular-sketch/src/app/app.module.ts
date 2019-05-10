//TOASTR POP-UP MODULES
import { ToastrModule } from 'ngx-toastr';
// REACTIVE FORMS MODULE
import { ReactiveFormsModule } from "@angular/forms";
// APP MODULES
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
//FIREBASE MODULES
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
// ROUTER APP MODULES
import { AppRouterModule } from './app-routing.module';
import { AppProtectedRoutingModule } from '../app/components/config/routing/app-protected-routing.module'
import { AppPublicRoutingModule } from '../app/components/config/routing/app-public-routing.module';
//PUBLIC MODULE
import { InfoPublicComponent } from '../app/components/public/info/info.component';
import { HomePublicComponent } from '../app/components/public/home/home.component';
import { LoginComponent } from '../app/components/public/login/login.component';
import { EsqueceuSenhaComponent } from '../app/components/public/esqueceu-senha/esqueceu-senha.component';
//PROTECTED MODULE
import { InfoComponent } from '../app/components/protected/info/info.component';
import { HomeComponent } from '../app/components/protected/home/home.component';
import { RegistrarComponent } from '../app/components/protected/registrar/registrar.component';
import { DashboardComponent } from '../app/components/protected/dashboard/dashboard.component';
import { VerificarEmailComponent } from '../app/components/protected/verificar-email/verificar-email.component';
//TAREFAS MODULE
import { TarefasComponent } from '../app/components/protected/tarefas/tarefas.component';
import { TarefaComponent } from '../app/components/protected/tarefas/tarefa/tarefa.component';
import { ListaTarefasComponent } from '../app/components/protected/tarefas/lista-tarefas/lista-tarefas.component';

// Auth service
import { AuthService } from "../app/components/config/services/auth.service";
import { BarraNavegacaoComponent } from '../app/components/public/barra-navegacao/barra-navegacao.component';
import { BarraNavAuthComponent } from '../app/components/protected/barra-nav-auth/barra-nav-auth.component';
import { PublicfooterComponent } from './components/public/publicfooter/publicfooter.component';
import { ProtectedfooterComponent } from './components/protected/protectedfooter/protectedfooter.component';

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
    VerificarEmailComponent,
    BarraNavegacaoComponent,
    BarraNavAuthComponent,
    PublicfooterComponent,
    ProtectedfooterComponent,
  ],
  imports: [
    BrowserModule, // IMPORT BROWSER CONFIG
    AppRouterModule, // IMPORT ROUTES
    AppProtectedRoutingModule, // IMPORT SECURITY ROUTES
    AppPublicRoutingModule,
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
