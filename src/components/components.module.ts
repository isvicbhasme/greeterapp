import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { SignupComponent } from './signup/signup';

import { UserdataProvider } from '../providers/userdata/userdata';
import { DayMsgItemComponent } from './day-msg-item/day-msg-item';
import { LeaveFormComponent } from './leave-form/leave-form';
import { ChooseFileComponent } from './choose-file/choose-file';

@NgModule({
	declarations: [SignupComponent,
		DayMsgItemComponent,
    LeaveFormComponent,
    ChooseFileComponent],
	imports: [
		IonicModule.forRoot(DayMsgItemComponent),
	],
	exports: [SignupComponent,
		DayMsgItemComponent,
    LeaveFormComponent,
    ChooseFileComponent]
})
export class ComponentsModule { }
