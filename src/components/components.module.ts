import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { SignupComponent } from './signup/signup';

import { UserdataProvider } from '../providers/userdata/userdata';
import { DayMsgItemComponent } from './day-msg-item/day-msg-item';

@NgModule({
	declarations: [SignupComponent,
		DayMsgItemComponent],
	imports: [
		IonicModule.forRoot(DayMsgItemComponent),
	],
	exports: [SignupComponent,
		DayMsgItemComponent]
})
export class ComponentsModule { }
