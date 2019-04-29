import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pacientes } from '../../models/pacientes';

@IonicPage()
@Component({
  selector: 'page-mostra-dados',
  templateUrl: 'mostra-dados.html',
})
export class MostraDadosPage {

  public dadosPaciente = {} as Pacientes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.dadosPaciente);
    this.dadosPaciente = this.navParams.get('paciente');
  } 
  
  ionViewDidLoad() {
    
  }
}
