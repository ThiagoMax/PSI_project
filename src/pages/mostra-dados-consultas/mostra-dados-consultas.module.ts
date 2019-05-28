import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraDadosConsultasPage } from './mostra-dados-consultas';

@NgModule({
  declarations: [
    MostraDadosConsultasPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraDadosConsultasPage),
  ],
})
export class MostraDadosConsultasPageModule {}
