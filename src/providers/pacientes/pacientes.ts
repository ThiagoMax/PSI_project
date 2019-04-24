import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { Pacientes } from '../../models/pacientes';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';


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
              private auth: AuthProvider,
              private db: AngularFireDatabase) {

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
    return this.db.list('Pacientes')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  adicionar(paciente: Pacientes) {
    this.db.list('Pacientes').push(paciente);
  }

  atualizar(paciente: Pacientes, key: string) {
    this.db.list('Pacientes').update(key, paciente);
  }

  excluir(key: string) {
    this.db.object('Pacientes/$(key)').remove();
  }
}
