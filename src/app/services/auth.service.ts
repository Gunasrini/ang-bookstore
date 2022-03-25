import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentToken!: string;

  RegisterUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }

  LoginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }

  getToken() {
    firebase.auth().currentUser?.getIdToken()
      .then(
        (token: string) => {
          this.currentToken = token;
        }
      );
    return this.currentToken;
  }

  constructor() { }
}
