import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { LeavePage } from '../pages/leave/leave';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserdataProvider } from '../providers/userdata/userdata';
import { NativeStorage } from '@ionic-native/native-storage';
import { BroadcastDbModelProvider } from '../providers/dbmodel/broadcastdbmodel';
import { LeaveDbModelProvider } from '../providers/dbmodel/leavedbmodel';
import { StoragemodelProvider } from '../providers/storagemodel/storagemodel';

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
    ContactPage,
    HomePage,
    TabsPage
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
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider,
    NativeStorage,
    BroadcastDbModelProvider,
    LeaveDbModelProvider,
    StoragemodelProvider,
  ]
})
export class AppModule {}
