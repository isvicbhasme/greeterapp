import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class UserdataProvider {

  constructor(private ngFireAuth: AngularFireAuth) {  }

  createUser(name: string, email: string, password: string) {
    // this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
    //   .catch(function(error) {
    //   console.log("Error:"+JSON.stringify(error));
    // });
  }
}
