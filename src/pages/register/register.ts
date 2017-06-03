import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login-page/login-page";
import { RegisterForm } from "../../model/forms/register-form";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public registerForm: RegisterForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthProvider) {
    this.registerForm = new RegisterForm("", "", "", "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  switchToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  register() {
    this._auth.signup(this.registerForm)
      .then(data => {
        console.log(JSON.stringify(data));
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  }

}
