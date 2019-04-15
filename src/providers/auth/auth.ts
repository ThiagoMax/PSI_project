import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  registrar(user: User) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user: User) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut();
  }

}
