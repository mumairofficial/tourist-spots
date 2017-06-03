import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login-page/login-page";
import { AuthProvider } from "../providers/auth/auth";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
        private _auth: AuthProvider) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            
            this.swithToTabsIfLoggedIn();
        });
    }

    swithToTabsIfLoggedIn() {
        if (this._auth.isLoggedIn) {
            this.rootPage = TabsPage;
        } else {
            this.rootPage = LoginPage;
        }
    }
}
