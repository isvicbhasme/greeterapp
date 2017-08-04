import { Component, Input } from '@angular/core';

@Component({
  selector: 'day-msg-item',
  templateUrl: 'day-msg-item.html'
})
export class DayMsgItemComponent {

  @Input('content') content: string;
  @Input('day') day: string;
  @Input('date') date: number;

  constructor() { }

}
