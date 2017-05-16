import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { FIREBASE_CONFIG } from '../config/firebase-config';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlaceDetail } from '../pages/place-detail/place-detail';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { PlacesPage } from '../pages/places/places';
import { PlaceFormModalPage } from '../pages/place-form-modal/place-form-modal';
import { ProfilePage } from '../pages/profile/profile';


// import { AuthProvider } from '../providers/auth-provider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlacesProvider } from '../providers/places/places';
import { AuthProvider } from '../providers/auth/auth';
import { TextAvatarDirective } from '../components/text-avatar/text-avatar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    PlaceDetail,
    DashboardPage,
    PlacesPage,
    ProfilePage,
    TextAvatarDirective,
    PlaceFormModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireOfflineModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    PlaceDetail,
    DashboardPage,
    PlacesPage,
    ProfilePage,
    PlaceFormModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PlacesProvider,
    AuthProvider
  ]
})
export class AppModule { }
