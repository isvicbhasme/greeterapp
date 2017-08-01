import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';

@Component({
  selector: 'ib-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  constructor(public alertCtrl: AlertController, public userDataProvider: UserdataProvider) {  }

  ionViewDidLoad() {  }

  ngAfterViewInit() {
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
          placeholder: 'Password',
          type: 'password'
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
            console.log('Saved clicked: '+data.name);
            this.userDataProvider.createUser(data.name, data.mail, data.password);
          }
        }
      ]
    });
    prompt.present();
  }

}
