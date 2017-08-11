import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-members-popover',
  templateUrl: 'members-popover.html',
})
export class MembersPopoverPage {

  showFileSelector = false;

  constructor() {  }

  changeProfilePhoto() {
    this.showFileSelector = true;
  }

}
