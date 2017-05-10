import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AuthProvider } from '../../providers/auth-provider';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  userName: string;
  password: string;

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(formValue): void {
    this.auth.login(formValue)
      .then(data => {
        this.navCtrl.push(TabsPage);
      })
      .catch(error => {
        console.log(error);
      });
  }



}
