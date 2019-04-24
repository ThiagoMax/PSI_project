import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarPacientePage } from '../adicionar-paciente/adicionar-paciente';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Pacientes } from '../../models/pacientes';
import { PacientesProvider } from '../../providers/pacientes/pacientes';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-meus-pacientes',
  templateUrl: 'meus-pacientes.html',

})
export class MeusPacientesPage {

  public listaPacientes: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public PacientesProvider: PacientesProvider) {
  }

  mostrarDetalhes() {
    console.log('DETALHES DO PACIENTE APERTADO!!')
  }

  addPaciente() {
    this.navCtrl.setRoot(AdicionarPacientePage);
  }

  buscaTodosPacientes() {
    this.listaPacientes = this.PacientesProvider.retornar();
  }

  ionViewDidLoad() {
    this.buscaTodosPacientes();
  }

}
