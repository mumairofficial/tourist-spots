import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { FIREBASE_CONFIG, GOOGLE_MAP_API_KEY } from '../config/firebase-config';

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
import { FlickrService } from '../providers/places/flickr-service';
import { TextAvatarDirective } from '../components/text-avatar/text-avatar';
import { LoginPage } from "../pages/login-page/login-page";
import { RegisterPage } from "../pages/register/register";

import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapService } from "../providers/places/google-map.service";

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
    AngularFireOfflineModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAP_API_KEY
    })
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
    Geolocation,
    GoogleMapService,
    PlacesProvider,
    AuthProvider,
    FlickrService
  ]
})
export class AppModule { }
