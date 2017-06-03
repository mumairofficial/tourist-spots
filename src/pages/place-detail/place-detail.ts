import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import firebase from "firebase";
import { Place } from '../../model/place';

@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetail {

  public place: Place;
  public usersList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afoDb: AngularFireOfflineDatabase) {
    this.place = this.navParams.data.selected_place;
    console.log(this.place);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceDetail');
  }

  toNumber(val: string): number {
    return Number(val);
  }  
}
