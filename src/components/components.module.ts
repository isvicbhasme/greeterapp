import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { SignupComponent } from './signup/signup';

import { UserdataProvider } from '../providers/userdata/userdata';
import { DayMsgItemComponent } from './day-msg-item/day-msg-item';
import { LeaveFormComponent } from './leave-form/leave-form';

@NgModule({
	declarations: [SignupComponent,
		DayMsgItemComponent,
    LeaveFormComponent],
	imports: [
		IonicModule.forRoot(DayMsgItemComponent),
	],
	exports: [SignupComponent,
		DayMsgItemComponent,
    LeaveFormComponent]
})
export class ComponentsModule { }
