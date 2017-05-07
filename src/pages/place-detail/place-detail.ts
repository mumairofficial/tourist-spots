import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Place } from '../../model/place';

@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetail {

  public place: Place;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.place = this.navParams.data.selected_place;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceDetail');

  }

}
