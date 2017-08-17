import { Component } from '@angular/core';

import { LeavePage } from '../leave/leave';
import { MembersPage } from '../members/members';
import { HomePage } from '../home/home';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { IUserModel } from '../../models/iusermodel';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  isUserDataInStore: boolean = false;
  tab1Root = HomePage;
  tab2Root = LeavePage;
  tab3Root = MembersPage;

  constructor(private userProvider: UserdataProvider) {
    this.setIsUserDataInStore();
  }

  private setIsUserDataInStore() {
    this.userProvider.getUserFromStore()
      .then(data => {
        this.isUserDataInStore = (data.name != null && data.email != null);
        console.log(this.isUserDataInStore);
      }).catch(error => {
        console.log(error);
        this.isUserDataInStore = false;
      });
  }

  private handleUserSignIn(user: IUserModel) {
    this.isUserDataInStore = true;
  }
}

