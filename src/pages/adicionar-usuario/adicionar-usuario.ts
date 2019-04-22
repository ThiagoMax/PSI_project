import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
import { MeusPacientesPage } from '../meus-pacientes/meus-pacientes';


@IonicPage()
@Component({
  selector: 'page-adicionar-usuario',
  templateUrl: 'adicionar-usuario.html',
})
export class AdicionarUsuarioPage {

  public user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public auth: AuthProvider) {
  }

  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async addUsuario(user: User) {
    if(user.nomeCompleto == "" || user.email == "" || user.cpf == 0 ||
    user.registroPro == 0 || user.password == "" || user.confirmPass == 0)
    {
      this.alert('Erro', 'É necessário preencher todos os campos!');
    } else {
      try {
        // Chama o método para cadastrar médico
        const result = await this.auth.registrar(user);
        this.navCtrl.setRoot(AdicionarUsuarioPage);

        if (result) {
          this.alert('', 'Usuário cadastrado com sucesso!')
          // Se ocorrer tudo bem redireciona para a página meusPacientes
          this.navCtrl.setRoot(MeusPacientesPage);
        }
      } catch (e) {
        this.alert('Erro ao cadastrar', e.message);
      }
    }

  }

  ionViewDidLoad() {}

}
