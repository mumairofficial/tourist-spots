import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthProvider,
    private alertCtrl: AlertController) {
        this.isLoggedIn = false;

    }

    ionViewDidLoad() {
        this.user = this._auth.userInfo();
        this.isLoggedIn = this._auth.isLoggedIn();
        console.log(JSON.stringify(this.user))
    }

    ionViewCanEnter() {
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
            })
        }
    }

    // updateProfile() {
    //     this._auth.updateProfile()
    // }
    
    logout() {
        this._auth.logout();
        this.navCtrl.setRoot(LoginPage);
    }

    login() {
        this.navCtrl.setRoot(LoginPage);
    }

}
