import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CirclePage } from '../pages/circle/circle';
import { MinePage } from '../pages/mine/mine';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {NavigationDetailsPage} from '../pages/mineDetailsPage/mineDetailsPage';
import { DiscoveryPage} from '../pages/discovery/discovery';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CirclePage,
    MinePage,
    HomePage,
    DiscoveryPage,
    TabsPage,
    NavigationDetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CirclePage,
    MinePage,
    HomePage,
    DiscoveryPage,
    TabsPage,
    NavigationDetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
