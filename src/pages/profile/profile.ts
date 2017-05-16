import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public isLoggedIn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthProvider) {
    this.isLoggedIn = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.watchUserLoggedInState();
  }

  logout() {
    this._auth.logout()
  }

  login() {
    this._auth.login();
  }

  private watchUserLoggedInState(): void {
    this._auth.watchIsLoggedIn().subscribe(authStatus => {
      console.log("subscribe to watch dog profile: ", authStatus);
      this.isLoggedIn = authStatus;
    })
  }

}
