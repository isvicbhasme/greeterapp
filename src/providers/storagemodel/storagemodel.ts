import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';

import { IBroadcastFeed } from "../../models/ibroadcastfeed";

@Injectable()
export class StoragemodelProvider {

  constructor(private nativeStorage: NativeStorage,
              private platform: Platform)
  { }

  getBroadcastContent(): Promise<IBroadcastFeed[]> {
    if(!this.platform.is('cordova')) {
      return new Promise((resolve, reject) => reject("Cordova not present"))
    }
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem('broadcast')
        .then(data => resolve(data))
        .catch(error => {
          reject("Could not fetch userinfo from storage\n" + JSON.stringify(error));
        });
    });
  }

  setBroadcastContent(content: IBroadcastFeed[]) {
    if(!this.platform.is('cordova')) {
      return;
    }
    this.nativeStorage.setItem('broadcast', content)
      .catch(error => console.log(error));
  }
}
