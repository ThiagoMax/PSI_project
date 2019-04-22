import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarPacientePage } from '../adicionar-paciente/adicionar-paciente';

@IonicPage()
@Component({
  selector: 'page-meus-pacientes',
  templateUrl: 'meus-pacientes.html',

})
export class MeusPacientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mostrarDetalhes() {
    console.log('DETALHES DO PACIENTE APERTADO!!')
  }

  addPaciente() {
    this.navCtrl.setRoot(AdicionarPacientePage);
  }

  ionViewDidLoad() {

  }

}
