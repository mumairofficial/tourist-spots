import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { LoginForm } from "../../model/forms/login-form";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { RegisterForm } from "../../model/forms/register-form";
import firebase from "firebase";

@Injectable()
export class AuthProvider {

    user: any;

    constructor(private http: Http, private afAuth: AngularFireAuth,
        private afDb: AngularFireDatabase) {

    }

    login(credentials: LoginForm): any {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    }

    userInfo() {
        return firebase.auth().currentUser;
    }

    isAdmin(): Observable<boolean> {
        return this.afDb.list('/admins')
            .map(data => {
                let isAdmin: boolean = false;
                if (data !== null && this.userInfo() !== null) {
                    data.forEach(admin => {
                        if (isAdmin = admin.uid === this.userInfo().uid) {
                            return isAdmin = true;
                        }
                    });
                }
                
                return isAdmin;
            })
            .first();

    }

    signup(userInfo: RegisterForm): any {
        firebase.auth().currentUser
        return this.afAuth.auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    isLoggedIn(): boolean {
        return this.userInfo() !== null;
    }
}
