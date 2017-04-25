import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
/* import { HomePage } from '/src/pages/home/home'; */
import { HomePage } from '../pages/home/home'; 
import { HometabPage } from '../pages/hometab/hometab'; 
import { CentrePage } from '../pages/centre/centre'; 
import { CincinnatiPage } from '../pages/cincinnati/cincinnati'; 
import { LexingtonPage } from '../pages/lexington/lexington'; 
import { UsersPage } from '../pages/users/users';
import { KenyonPage } from '../pages/users/kenyon/kenyon';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    KenyonPage,
    HometabPage,
      CentrePage,
      CincinnatiPage,
      LexingtonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    KenyonPage,
    HometabPage,
      CentrePage,
      CincinnatiPage,
      LexingtonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
