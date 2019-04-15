import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusPacientesPage } from './meus-pacientes';

@NgModule({
  declarations: [
    MeusPacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusPacientesPage),
  ],
})
export class MeusPacientesPageModule {}
