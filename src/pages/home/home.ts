import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { AdicionarPacientePage } from '../adicionar-paciente/adicionar-paciente';
import { PacientesProvider } from '../../providers/pacientes/pacientes';
import { Pacientes } from '../../models/pacientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pacientes: Observable<Pacientes[]>;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private pacientesProvider:PacientesProvider) {}

  adicionar () {
    this.navCtrl.push(AdicionarPacientePage);
  }

  excluir(id: string) {
    this.pacientesProvider.excluir(id);
  }

  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(LoginPage);
     });
  }

  ionViewDidLoad() {

  }
}
