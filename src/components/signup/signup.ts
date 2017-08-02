import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';

@Component({
  selector: 'ib-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  private registerDlg: any;
  private loginDlg: any;

  constructor(public alertCtrl: AlertController, public userDataProvider: UserdataProvider) {  }

  ngAfterViewInit() {
    this.createRegistrationDlg();
  }

  createRegistrationDlg() {
    this.registerDlg = this.alertCtrl.create({
      title: 'Signup',
      message: "I would like to know you better",
      inputs: [
        {
          name: 'name',
          placeholder: 'Full Name'
        },
        {
          name: 'email',
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
          text: 'Login',
          handler: data => {
            this.createLoginDlg();
          }
        },
        {
          text: 'Register',
          handler: data => {
            this.userDataProvider.createUser(data.name, data.email, data.password);
          }
        },{
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    this.showRegistrationDlg();
  }

  createLoginDlg() {
    this.loginDlg = this.alertCtrl.create({
      title: 'Login',
      message: "Hmmm, you look familiar...",
      inputs: [
        {
          name: 'email',
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
          text: 'Login',
          handler: data => {
            this.userDataProvider.loginUser(data.email, data.password);
          }
        },
        {
          text: 'Register',
          handler: data => {
            this.createRegistrationDlg();
          }
        },{
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    this.showLoginDlg();
  }

  showRegistrationDlg() {
    this.registerDlg.present();
  }

  showLoginDlg() {
    this.loginDlg.present();
  }

}
