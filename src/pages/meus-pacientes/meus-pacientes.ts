import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarPacientePage } from '../adicionar-paciente/adicionar-paciente';
import { Pacientes } from '../../models/pacientes';
import { PacientesProvider } from '../../providers/pacientes/pacientes';
import { Observable } from 'rxjs';
import { MostraDadosPage } from '../mostra-dados/mostra-dados';

@IonicPage()
@Component({
  selector: 'page-meus-pacientes',
  templateUrl: 'meus-pacientes.html',

})
export class MeusPacientesPage {

  public listaPacientes: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesProvider: PacientesProvider) {
  }

  mostrarDados(event, paciente) {
    this.navCtrl.push(MostraDadosPage, {paciente: paciente});
  }

  addPaciente() {
    this.navCtrl.push(AdicionarPacientePage);
  }

  buscaTodosPacientes() {
    this.listaPacientes = this.PacientesProvider.retornar();
  }

  ionViewDidLoad() {
    this.buscaTodosPacientes();
  }

}
