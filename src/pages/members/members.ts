import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { MembersPopoverPage } from "../members-popover/members-popover";

import * as Constants from "../../models/constants";

@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  private changeProfilePhoto = false;

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MembersPopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(this.handlePopoverSelection);
  }

  handlePopoverSelection(event:any) {
    if(Constants.CHANGE_PROFILE_PHOTO == event[Constants.SELECTED_ITEM]) {
      console.log("Change profile");
      this.changeProfilePhoto = true;
    }
  }

}
