import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { Pacientes } from '../../models/pacientes';

/*
  Generated class for the PacientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PacientesProvider {

  public caminho: string = '';

  private pacientesColllection: AngularFirestoreCollection<Pacientes>;

  pacientes: Observable<Pacientes[]>;


  constructor(public http: HttpClient,
              private afs: AngularFirestore,
              private auth: AuthProvider) {
    this.auth.user.subscribe(auth => {

      if (auth != null) {
        this.caminho = '/' + auth.email;
        this.pacientesColllection = afs.collection<Pacientes>(this.caminho, ref => {
          return ref;
        });
      }
      else {
        this.caminho = '';
      }
    });
  }

  retornar() {
    return this.afs.collection<Pacientes>(this.caminho)
    .snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Pacientes;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
  }

  adicionar(paciente: Pacientes) {
    this.pacientesColllection.add(paciente);
  }

  atualizar(id: string, paciente: Pacientes) {
    this.pacientesColllection.doc(id).update(paciente);
  }

  excluir(id: string) {
    this.pacientesColllection.doc(id).delete();
  }
}
