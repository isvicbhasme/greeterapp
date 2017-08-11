import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersPopoverPage } from './members-popover';

@NgModule({
  declarations: [
    MembersPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersPopoverPage),
  ],
})
export class MembersPopoverPageModule {}
