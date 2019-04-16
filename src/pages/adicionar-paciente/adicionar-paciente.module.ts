import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarPacientePage } from './adicionar-paciente';

@NgModule({
  declarations: [
    AdicionarPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarPacientePage),
  ],
})
export class AdicionarPacientePageModule {}
