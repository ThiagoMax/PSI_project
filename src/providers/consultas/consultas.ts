import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { Consultas } from '../../models/consultas';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable()
export class ConsultasProvider {

  public caminho: string = '';

  private consultasColllection: AngularFirestoreCollection<Consultas>;

  consultas: Observable<Consultas[]>;

  constructor(public http: HttpClient,
    private afs: AngularFirestore,
    private auth: AuthProvider,
    private db: AngularFireDatabase) {

      this.auth.user.subscribe(auth => {
        if (auth != null) {
          this.caminho = '/' + auth.email;
          this.consultasColllection = afs.collection<Consultas>(this.caminho, ref => {
            return ref;
          });
        }
        else {
          this.caminho = '';
        }
      });
    }

    retornar() {
      return this.db.list('Consultas')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
        })
      );
    }

    adicionar(consulta: Consultas) {
      this.db.list('Consultas').push(consulta);
    }

    // As funções de atualizar e excluir não serão feitos.
  }
