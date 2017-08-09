import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";

import { LeaveFormComponent } from "../../components/leave-form/leave-form";
import { LeaveDbModelProvider } from "../../providers/dbmodel/leavedbmodel";
import { UserdataProvider } from "../../providers/userdata/userdata";
import { ILeave } from "../../models/ileave";

@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {

  leaves: FirebaseListObservable<any>;
  shouldLeaveFormBeShown : boolean = false;

  constructor(private leavedbmodel: LeaveDbModelProvider,
              private userProvider: UserdataProvider) {
  }

  ionViewDidLoad() {
    this.userProvider.getUserFromStore()
    .then(user => this.leaves = this.leavedbmodel.getCurrentUserLeave({'uid': user.uid}));
  }

  handleNewLeaveEvent(leave: ILeave) {
    this.leaves.push(leave);
  }

}
