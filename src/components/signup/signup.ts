import { Component, Output, EventEmitter } from '@angular/core';

import { IUserModel } from "../../models/iusermodel";
import { AlertController } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';

@Component({
  selector: 'ib-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  @Output() signedInUser = new EventEmitter();
  private registerDlg: any;
  private loginDlg: any;
  private registerMsg: string = "I would like to know you better";
  private loginMsg: string = "Hmmm, you look familiar...";

  constructor(public alertCtrl: AlertController, public userDataProvider: UserdataProvider) {  }

  ngAfterViewInit() {
    this.createRegistrationDlg();
  }

  createRegistrationDlg() {
    this.registerDlg = this.alertCtrl.create({
      title: 'Signup',
      message: this.registerMsg,
      enableBackdropDismiss: false,
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
          text: 'Register',
          handler: data => {
            this.userDataProvider.createUser(data.name, data.email, data.password)
            .then(user => this.fireSuccessEvent(user))
            .catch(errMsg => {
              this.registerMsg = this.highlightMessage(errMsg);
              this.createRegistrationDlg();
            });
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.createLoginDlg();
          }
        },
        {
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
      message: this.loginMsg,
      enableBackdropDismiss: false,
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
            this.userDataProvider.loginUser(data.email, data.password)
            .then(user => this.fireSuccessEvent(user))
            .catch(errMsg => {
              this.loginMsg = this.highlightMessage(errMsg);
              this.createLoginDlg();
            });
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

  highlightMessage(msg: string) {
    return "<div class='errMsg' style='color:red'>"+msg+"</div>";
  }

  fireSuccessEvent(user: any) {
    let userModel: IUserModel = {name: user.name, email: user.email};
    this.signedInUser.emit(userModel);
  }
}
