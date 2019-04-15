import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';
import { MeusPacientesPage } from '../meus-pacientes/meus-pacientes';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user = {} as User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthProvider,
              private alertCtrl: AlertController) {}

  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async login(user: User) {
    // Valida se foi informado email e password
    if(user.email == "" || user.password == "")
    {
      this.alert('Erro', 'É necessário informar o email e senha');
    } else {
      try {
        // Chama o método para fazer login
        const result = await this.auth.login(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página meusPacientes
          this.navCtrl.setRoot(MeusPacientesPage);
        }
      } catch (e) {
        this.alert('Erro ao logar', e.message);
      }
    }
  }

  async register(user: User) {

    // Valida se foi informado email e password
    if(user.email == "" || user.password == "")
    {
      this.alert('Erro', 'É necessário informar o email e senha');
    } else {
      try {

        // Chama o método para cadastrar usuário
        const result = await this.auth.registrar(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página meusPacientes
          this.navCtrl.setRoot(MeusPacientesPage);
        }
      } catch (e) {
        this.alert('Erro ao cadastrar', e.message);
      }
    }
  }

  ionViewDidLoad() {
    // Toda vez que alguém acessar a tela de login ele será deslogado
    this.auth.logout();
  }

}
