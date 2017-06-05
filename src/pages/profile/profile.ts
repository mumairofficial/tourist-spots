import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from "../login-page/login-page";
import { RegisterForm } from "../../model/forms/register-form";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {

    public isLoggedIn: boolean;
    public userInfo: RegisterForm;
    public user: any;

    constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, private _auth: AuthProvider,
    private alertCtrl: AlertController) {
        this.isLoggedIn = false;

    }

    ionViewDidEnter() {
        this.user = this._auth.userInfo();
        this.isLoggedIn = this._auth.isLoggedIn();
        console.log(JSON.stringify(this.user))
        console.log('didEnterHook')
    }

    // updateProfile() {
    //     this._auth.updateProfile()
    // }
    
    logout() {
        this._auth.logout();
        this.app.getRootNav().setRoot(LoginPage);
    }

    login() {
        this.navCtrl.setRoot(LoginPage);
    }

}
