import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pacientes } from '../../models/pacientes';
import { MinhasConsultasPage } from '../minhas-consultas/minhas-consultas';
import { AdicionarConsultasPage } from '../adicionar-consultas/adicionar-consultas';

@IonicPage()
@Component({
  selector: 'page-mostra-dados',
  templateUrl: 'mostra-dados.html',
})
export class MostraDadosPage {

  public dadosPaciente = {} as Pacientes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dadosPaciente = this.navParams.get('paciente');
  }

  goToNovaConsulta() {
    this.navCtrl.push(AdicionarConsultasPage);
  }

  goToListaConsultas() {
    this.navCtrl.push(MinhasConsultasPage);
  }

  ionViewDidLoad() {

  }
}
