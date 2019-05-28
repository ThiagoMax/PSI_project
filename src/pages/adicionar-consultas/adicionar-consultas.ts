import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pacientes } from '../../models/pacientes';
import { ConsultasProvider } from '../../providers/consultas/consultas';
import { Consultas } from '../../models/consultas';


@IonicPage()
@Component({
  selector: 'page-adicionar-consultas',
  templateUrl: 'adicionar-consultas.html',
})
export class AdicionarConsultasPage {

  public dadosPaciente = {} as Pacientes;

  status = [
    { nome: 'Compareceu' },
    { nome: 'Não compareceu' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private consultasProvider: ConsultasProvider) {
    this.dadosPaciente = this.navParams.get('paciente');
  }

  adicionarConsulta(consulta: Consultas) {
    this.consultasProvider.adicionar(consulta);
    this.navCtrl.pop(); //parei akiiii... testar esse pop() depois
  }

  backButton() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {}

}
