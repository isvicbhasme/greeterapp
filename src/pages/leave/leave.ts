import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";

import { LeaveDbModelProvider } from "../../providers/dbmodel/leavedbmodel";
import { ILeave } from "../../models/ileave";

@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {

  leaves: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private leavedbmodel: LeaveDbModelProvider) {
  }

  ionViewDidLoad() {
    console.log("View loaded")
    this.leaves = this.leavedbmodel.getCurrentUserLeave({limit: 10});
  }

}
