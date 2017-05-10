import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth-provider';

import { PlaceDetail } from '../place-detail/place-detail';

import { Place } from '../../model/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loader: any;
  public places: FirebaseListObservable<Place[]>;

  public userEmail: string;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private fireDb: AngularFireDatabase, private _auth: AuthProvider) {
    this.places = fireDb.list('/places');
    this.userEmail = _auth.displayName();
  }

  navigateToPlaceDetail(place: Place): void {
    this.navCtrl.push(PlaceDetail, {selected_place: place});
  }

  private presentLoader(): any {
  	this.loader = this.loadingCtrl.create({
  		content: 'Loading...'
  	});

  	this.loader.present();
  }

  logout() {
    this._auth.logout()
  }
}
