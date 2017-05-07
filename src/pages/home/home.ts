import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { PlaceDetail } from '../place-detail/place-detail';

import { Place } from '../../model/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public places: FirebaseListObservable<Place[]>;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private fireDb: AngularFireDatabase) {
    this.places = fireDb.list('/places');
  }

  navigateToPlaceDetail(place: Place): void {
    this.navCtrl.push(PlaceDetail, {selected_place: place});
  }
}
