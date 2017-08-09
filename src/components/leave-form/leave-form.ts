import { Component, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { ILeave } from "../../models/ileave";

@Component({
  selector: 'leave-form',
  templateUrl: 'leave-form.html'
})
export class LeaveFormComponent {

  private leaveDlg: any;
  @Output() newLeaveEvent = new EventEmitter();

  constructor(public alertCtrl: AlertController) {  }

  ngAfterViewInit() {
    this.showLeaveDlg();
  }

  showLeaveDlg() {
    this.leaveDlg = this.alertCtrl.create({
      title: 'Apply Leave',
      message: 'When would you like to take leave',
      enableBackdropDismiss: false,
      inputs: [
        {
          name: 'date',
          placeholder: 'When do you need leave',
          type: 'date'
        },
        {
          name: 'reason',
          placeholder: 'Reason',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            if(new Date(data.date) != undefined && data.reason.length > 0)
              this.emitNewLeaveEvent({'leaveOn': data.date, 'reason': data.reason});
            else
              return false;
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
    this.leaveDlg.present();
  }

  emitNewLeaveEvent(leave: ILeave) {
    this.newLeaveEvent.emit(leave);
  }
}
