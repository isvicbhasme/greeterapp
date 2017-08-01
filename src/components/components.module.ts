import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup';

import { UserdataProvider } from '../providers/userdata/userdata';

@NgModule({
	declarations: [SignupComponent],
	imports: [],
	exports: [SignupComponent],
	providers: [UserdataProvider,]
})
export class ComponentsModule {}
