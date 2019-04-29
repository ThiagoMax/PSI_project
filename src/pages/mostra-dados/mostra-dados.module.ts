import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraDadosPage } from './mostra-dados';

@NgModule({
  declarations: [
    MostraDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraDadosPage),
  ],
})
export class MostraDadosPageModule {}
