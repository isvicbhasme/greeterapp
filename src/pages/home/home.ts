import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { DbmodelProvider } from "../../providers/dbmodel/dbmodel";
import { StoragemodelProvider } from "../../providers/storagemodel/storagemodel";
import { IBroadcastFeed } from "../../models/ibroadcastfeed";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title: string = "Article"
  feeds: Array<IBroadcastFeed> = [];

  constructor(public navCtrl: NavController,
    private dbProvider: DbmodelProvider,
    private storageProvider: StoragemodelProvider,) {
  }

  ionViewDidLoad() {
    this.storageProvider.getBroadcastContent()
    .then(content => this.feeds = content)
    .catch(err => console.log("Could not fetch from local store: "+err));
    this.dbProvider.fetchBroadcastContent({ limit: 10 })
      .then(data => {
        this.feeds = data;
        this.storageProvider.setBroadcastContent(this.feeds);
      });

  }
}
