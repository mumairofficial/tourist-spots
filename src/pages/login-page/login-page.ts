import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginForm } from "../../model/forms/login-form";
import { RegisterPage } from "../register/register";

@Component({
    selector: 'page-login-page',
    templateUrl: 'login-page.html',
})
export class LoginPage {

    public loginForm: LoginForm;
    public user: any;

    private loader: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private _auth: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
        this.loginForm = new LoginForm("", "");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    login(): void {
        this.showLoader();

        this._auth.login(this.loginForm)
            .then(data => {
                this.loader.dismiss();
                this.navCtrl.setRoot(TabsPage);
            })
            .catch(error => {
                this.showError(error.message);
            });
    }

    switchToRegisterPage() {
        this.navCtrl.setRoot(RegisterPage);
    }

    quickLogin() {
        // this.loginForm = new LoginForm("mumairofficial@gmail.com", "Umair1");
        this.loginForm = new LoginForm("umairmughalz@gmail.com", "Umair1");
        this.login();
    }

    private showLoader() {
        this.loader = this.loadingCtrl.create({
            content: 'Processing'
        });
        this.loader.present();
    }

    private showError(message: string) {
        this.loader.dismiss();

        let alert = this.alertCtrl.create({
            subTitle: 'Login failed',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Retry',
                    handler: () => {
                        this.login();
                    }
                }
            ]
        });
        alert.present();
    }

}
