import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserdataProvider } from "../userdata/userdata";
import { CommonUtil } from "./commonutil";
import { ILeave } from "../../models/ileave";

@Injectable()
export class LeaveDbModelProvider {

  constructor(private ngFireDb: AngularFireDatabase,
    private userProvider: UserdataProvider)
  { }

  getCurrentUserLeave(options: any) : FirebaseListObservable<any> {
    // options = CommonUtil.parseOptions(options);
    // let uid: string;
    // this.userProvider.getUserFromStore().then(user => {
    //   uid = user.uid
      // console.log("Pushing :"+this.ngFireDb.list("/leaves/DoRhhQ3i5lOmqbYBRptnZVAAWSe2"));
      return this.ngFireDb.list("/leaves/yEUZBANHuoM8grHSkErEMVdqE9u1");
      // console.log(this.ngFireDb.list("/leaves/"+uid));
      // this.ngFireDb.database.ref("/leaves/" + uid)
      //   .orderByKey()
      //   .limitToLast(options.limit)
      //   .on('child_added', (ds) => {
      //     let key = Object.keys(ds.val())[0];
      //     let date = new Date(key);
      //     let content = ds.val()[key];
      //     console.log("Pushing")
      //     leaves.push({ 'date': date, 'content': content });
      //   });
    // });
  }
}
