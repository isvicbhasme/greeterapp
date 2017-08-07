import { Component, Input } from '@angular/core';

@Component({
  selector: 'day-msg-item',
  templateUrl: 'day-msg-item.html'
})
export class DayMsgItemComponent {

  @Input('leaveOn') timestamp: number;
  @Input('reason') content: string;
  day: string;
  date: number;

  constructor() {
    
   }

   ngOnInit() {
    let leaveDate = new Date(this.timestamp);
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    this.day = days[leaveDate.getDay()];
    this.date = leaveDate.getDate();
   }

}
