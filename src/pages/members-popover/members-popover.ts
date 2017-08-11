import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-members-popover',
  templateUrl: 'members-popover.html',
})
export class MembersPopoverPage {

  showPhotoChangeDlg = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPopoverPage');
  }


  changeProfilePhoto() {

  }

}
