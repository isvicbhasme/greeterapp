import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { LeavePage } from '../pages/leave/leave';
import { MembersPage } from '../pages/members/members';
import { HomePage } from '../pages/home/home';
import { MembersPopoverPage } from '../pages/members-popover/members-popover';
import { TabsPage } from '../pages/tabs/tabs';

import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserdataProvider } from '../providers/userdata/userdata';
import { NativeStorage } from '@ionic-native/native-storage';
import { FileChooser } from '@ionic-native/file-chooser';
import { Base64 } from '@ionic-native/base64';
import { BroadcastDbModelProvider } from '../providers/dbmodel/broadcastdbmodel';
import { LeaveDbModelProvider } from '../providers/dbmodel/leavedbmodel';
import { StoragemodelProvider } from '../providers/storagemodel/storagemodel';
import { MembersDbModelProvider } from '../providers/dbmodel/members-db-model';

export const firebaseConfig = {
  apiKey: "AIzaSyDIhxcXTOFr3kG02KH9doKkmwAr4UMu__Q",
  authDomain: "greeter.firebaseapp.com",
  databaseURL: "https://greeter.firebaseio.com",
  projectId: "project-6852264495676640514",
  storageBucket: "project-6852264495676640514.appspot.com",
  messagingSenderId: "323854408981"
};

@NgModule({
  declarations: [
    MyApp,
    LeavePage,
    MembersPage,
    HomePage,
    TabsPage,
    MembersPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeavePage,
    MembersPage,
    HomePage,
    TabsPage,
    MembersPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider,
    NativeStorage,
    FileChooser,
    Base64,
    BroadcastDbModelProvider,
    LeaveDbModelProvider,
    StoragemodelProvider,
    MembersDbModelProvider,
  ]
})
export class AppModule {}
