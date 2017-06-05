import { Component } from '@angular/core';

import { PlacesPage } from '../places/places';
import { ProfilePage } from '../profile/profile';

import { AuthProvider } from '../../providers/auth/auth';
import { AlertController, NavController } from "ionic-angular";
import { LoginPage } from "../login-page/login-page";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public isAdmin: boolean;
  public isUser: boolean;

  tab1Root = PlacesPage;
  tab2Root = ProfilePage;

  constructor(private _auth: AuthProvider, private alertCtrl: AlertController, private navCtrl: NavController) {

  }

  ionViewCanEnter() {
    console.log('canEnterHook');
    if (!this._auth.isLoggedIn()) {
      this.alertCtrl.create({
        subTitle: "Session Expired",
        message: "Login again to access the application",
        buttons: [
          {
            text: 'Login',
            handler: () => {
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ],
        enableBackdropDismiss: false
      }).present();
    }
  }

}
