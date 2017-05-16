// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

// import { User as firebaseUser } from 'firebase/app';
// import * as firebase from 'firebase';
// import { AngularFireAuth } from 'angularfire2/auth';

// @Injectable()
// export class AuthProvider {

// 	private authState: Observable<firebaseUser>;
// 	private currentUser: firebaseUser;

// 	constructor(public http: Http, private fireAuth: AngularFireAuth) {
// 		firebase.auth().onAuthStateChanged(user => {
// 			if (user) {
// 				console.log('user', user.email);
// 				this.currentUser = user;
// 			} else {
// 				console.log('user is not logged in');
// 			}
// 		})
// 	}

// 	login(userLogin: any): any {
// 		return this.fireAuth.auth.signInWithEmailAndPassword(userLogin.userName, userLogin.password);
// 	}

// 	logout() {
// 		this.fireAuth.auth.signOut();
// 	}

// 	authenticated(): boolean {
// 		this.currentUser = firebase.auth().currentUser;
// 		return this.currentUser != null ? true : false;
// 	}

// 	displayName(): any {
// 		return firebase.auth().onAuthStateChanged(user => {
// 			if (user) {
// 				return user.email;
// 			} else {
// 				return '';
// 			}
// 		})
// 	}

// }
