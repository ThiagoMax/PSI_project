import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacientesProvider } from '../../providers/pacientes/pacientes';
import { Pacientes } from '../../models/pacientes';
import { MeusPacientesPage } from '../meus-pacientes/meus-pacientes';

@IonicPage()
@Component({
  selector: 'page-adicionar-paciente',
  templateUrl: 'adicionar-paciente.html',
})
export class AdicionarPacientePage {

  public paciente = {} as Pacientes;
  sexos = [
    { nome: 'Masculino' },
    { nome: 'Feminino' },
    { nome: 'Outro' }
  ];

  estCivil = [
    {nome: 'Solteiro(a)' },
    {nome: 'Casado(a)' },
    {nome: 'Viúvo(a)' }
  ];

  escolaridade = [
    {nome: 'Ensino fundamental incompleto' },
    {nome: 'Ensino fundamental completo' },
    {nome: 'Ensino médio incompleto' },
    {nome: 'Ensino médio completo' },
    {nome: 'Ensino superior incompleto' },
    {nome: 'Ensino superior completo' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesProvider:PacientesProvider) {
  }

  adicionarPaciente(paciente: Pacientes) {
    console.log(this.sexos);
    this.pacientesProvider.adicionar(paciente);
    this.navCtrl.setRoot(MeusPacientesPage);
  }

  ionViewDidLoad() {}

  backButton() {
    this.navCtrl.pop();
  }

}
