import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { IBroadcastFeed } from "../../models/ibroadcastfeed";

import { UserdataProvider } from "../userdata/userdata";
import { CommonUtil } from "./commonutil";

@Injectable()
export class BroadcastDbModelProvider {

  constructor(private ngFireDb: AngularFireDatabase,
    private userProvider: UserdataProvider)
  { }

  fetchBroadcastContent(options: any): any {
    options = CommonUtil.parseOptions(options);
    return new Promise((resolve, reject) => {
      this.ngFireDb.database.ref("/broadcasts/")
        .orderByKey()
        .limitToLast(options.limit)
        .once("value")
        .then(data => {
          let array: Array<IBroadcastFeed> = [];
          for (var v in data.val()) {
            array.push(data.val()[v]);
          }
          resolve(array);
        })
        .catch(err => reject(err));
    });
  }
}
