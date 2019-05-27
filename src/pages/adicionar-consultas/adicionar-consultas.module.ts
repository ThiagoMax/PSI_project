import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarConsultasPage } from './adicionar-consultas';

@NgModule({
  declarations: [
    AdicionarConsultasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarConsultasPage),
  ],
})
export class AdicionarConsultasPageModule {}
