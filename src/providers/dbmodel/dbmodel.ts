import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DbmodelProvider {

  constructor(private ngFireDb: AngularFireDatabase) { }

  fetchBroadcastContent(options: any) : any {
    options = this.parseOptions(options);
    return new Promise((resolve, reject) => {
      this.ngFireDb.database.ref("/broadcasts/")
        .orderByKey()
        .limitToLast(options.limit)
        .once("value")
        .then(data => {
          let array = [];
          for(var v in data.val()) {
            array.push(data.val()[v]);
          }
          resolve(array);
        })
        .catch(err => reject(err));
    });
  }

  private parseOptions(options: any) : Object {
    if(options.limit == undefined || options.limit == null) {
      options.limit = 1000;
    }
    return options;
  }
}
