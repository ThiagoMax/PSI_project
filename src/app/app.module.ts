import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { config } from '../config';
import { LoginPage } from '../pages/login/login';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { PacientesProvider } from '../providers/pacientes/pacientes';
import { MeusPacientesPage } from '../pages/meus-pacientes/meus-pacientes';
import { AdicionarPacientePage } from '../pages/adicionar-paciente/adicionar-paciente';
import { AdicionarUsuarioPage } from '../pages/adicionar-usuario/adicionar-usuario';
import { MostraDadosPage } from '../pages/mostra-dados/mostra-dados';
import { ConsultasProvider } from '../providers/consultas/consultas';
import { AdicionarConsultasPage } from '../pages/adicionar-consultas/adicionar-consultas';
import { MinhasConsultasPage } from '../pages/minhas-consultas/minhas-consultas';
import { MostraDadosConsultasPage } from '../pages/mostra-dados-consultas/mostra-dados-consultas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdicionarPacientePage,
    AdicionarUsuarioPage,
    MeusPacientesPage,
    MostraDadosPage,
    AdicionarConsultasPage,
    MinhasConsultasPage,
    MostraDadosConsultasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdicionarPacientePage,
    AdicionarUsuarioPage,
    MeusPacientesPage,
    MostraDadosPage,
    AdicionarConsultasPage,
    MinhasConsultasPage,
    MostraDadosConsultasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PacientesProvider,
    ConsultasProvider
  ]
})
export class AppModule {}
