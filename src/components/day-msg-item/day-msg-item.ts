import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day-msg-item',
  templateUrl: 'day-msg-item.html'
})
export class DayMsgItemComponent {

  @Input('leaveOn') timestamp: number;
  @Input('reason') content: string;
  @Output() deleteEvent = new EventEmitter;
  year: string;
  month: string;
  date: number;

  constructor() {
    
   }

   ngOnInit() {
    let leaveDate = new Date(this.timestamp).toDateString().split(' ');
    this.date = Number(leaveDate[2]);
    this.month = leaveDate[1];
    this.year = leaveDate[3];
   }

   deleteLeave() {
     this.deleteEvent.emit();
   }

}
