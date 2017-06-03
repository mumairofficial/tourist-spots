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

import { TabsPage } from '../pages/tabs/tabs';
import { PlaceDetail } from '../pages/place-detail/place-detail';

import { PlacesPage } from '../pages/places/places';
import { PlaceFormModalPage } from '../pages/place-form-modal/place-form-modal';
import { ProfilePage } from '../pages/profile/profile';


// import { AuthProvider } from '../providers/auth-provider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlacesProvider } from '../providers/places/places';
import { AuthProvider } from '../providers/auth/auth';
import { TextAvatarDirective } from '../components/text-avatar/text-avatar';
import { LoginPage } from "../pages/login-page/login-page";
import { RegisterPage } from "../pages/register/register";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PlaceDetail,
    PlacesPage,
    ProfilePage,
    TextAvatarDirective,
    PlaceFormModalPage,
    LoginPage,
    RegisterPage
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
    TabsPage,
    PlaceDetail,
    PlacesPage,
    ProfilePage,
    PlaceFormModalPage,
    LoginPage,
    RegisterPage
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
