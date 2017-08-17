import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import * as Constants from "../../models/constants";

@Component({
  selector: 'page-members-popover',
  templateUrl: 'members-popover.html',
})
export class MembersPopoverPage {

  constructor(public viewCtrl: ViewController) {  }

  changeProfilePhoto() {
    let selection = {};
    selection[Constants.SELECTED_ITEM] = Constants.CHANGE_PROFILE_PHOTO;
    this.viewCtrl.dismiss(selection);
  }

}
