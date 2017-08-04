import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

import { IUserModel } from '../../models/iusermodel';

@Injectable()
export class UserdataProvider {

  constructor(private ngFireAuth: AngularFireAuth,
    private nativeStorage: NativeStorage)
  { }

  createUser(name: string, email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ngFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.setUserToStore(user);
          resolve(user);
        })
        .catch(function (error: any) {
          var errorCode = error.code;
          var errorMessage = error.message;
          reject(error.message);
          console.log(error);
        });
    });
  }

  loginUser(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          this.setUserToStore(user);
          resolve(user);
        })
        .catch(function (error: any) {
          if (error.code == "auth/user-not-found") {
            reject("I don't know you, please register!")
          }
          else {
            reject(error.message);
          }
          console.log(error);
        });
    });
  }

  getUserFromStore(): Promise<IUserModel> {
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem('userinfo')
        .then(data => {
          let user: IUserModel = { name: data.displayName, email: data.email };
          resolve(user);
        }).catch(error => {
          reject("Could not fetch userinfo from storage\n" + JSON.stringify(error));
        });
    });
  }

  setUserToStore(user: firebase.User) {
    let userinfo: IUserModel = { name: user.displayName, email: user.email }
    this.nativeStorage.setItem('userinfo', userinfo)
      .catch(error => console.log(error));
  }
}
