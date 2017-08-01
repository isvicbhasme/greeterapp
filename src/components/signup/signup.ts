import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'ib-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  constructor(public alertCtrl: AlertController) {
    this.showPrompt(); // Move to wherever applicable
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Signup',
      message: "The following information will help us know you better",
      inputs: [
        {
          name: 'name',
          placeholder: 'Full Name'
        },
        {
          name: 'mail',
          placeholder: 'E-Mail'
        },
        {
          name: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
