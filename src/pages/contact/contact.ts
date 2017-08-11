import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { MembersPopoverPage } from "../members-popover/members-popover";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MembersPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
