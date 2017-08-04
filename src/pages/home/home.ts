import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { DbmodelProvider } from "../../providers/dbmodel/dbmodel";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  feeds: Array<any> = [];

  constructor(public navCtrl: NavController,
    private dbProvider: DbmodelProvider) {
  }

  ionViewDidLoad() {
    this.dbProvider.fetchBroadcastContent({ limit: 10 })
      .then(data => this.feeds = data);

  }
}
