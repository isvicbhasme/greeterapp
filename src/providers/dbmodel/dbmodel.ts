import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DbmodelProvider {

  constructor(private ngFireDb: AngularFireDatabase) { }

  fetchBroadcastContent(options) {
    return new Promise((resolve, reject) => {
      this.ngFireDb.database.ref("/broadcasts/")
        .once("value")
        .then(data => {
          resolve(data);
        })
        .catch(err => reject(err));
    });

  }
}
