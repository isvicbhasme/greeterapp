import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';

import { IUserModel } from '../../models/iusermodel';

@Injectable()
export class UserdataProvider {

  constructor(private ngFireAuth: AngularFireAuth,
              private nativeStorage: NativeStorage)
  {  }

  createUser(name: string, email: string, password: string) {
    // this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
    //   .catch(function(error) {
    //   console.log("Error:"+JSON.stringify(error));
    // });
  }

  getUserFromStore() : Promise<IUserModel>{
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem('userinfo')
      .then(data => {
        let user : IUserModel = { name: data.displayName, email: data.email};
        resolve(user);
      }).catch(error => {
        reject("Could not fetch userinfo from storage\n"+JSON.stringify(error));
      });
    });
  }
}
