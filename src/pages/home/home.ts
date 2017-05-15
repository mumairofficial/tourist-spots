import { Component } from '@angular/core';
import { AlertController, NavController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireOfflineDatabase, AfoListObservable, AfoObjectObservable } from 'angularfire2-offline/database';

import { AuthProvider } from '../../providers/auth-provider';

import { PlaceDetail } from '../place-detail/place-detail';

import { Place } from '../../model/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loader: any;
  // public places: FirebaseListObservable<Place[]>;
  public places: AfoListObservable<Place[]>;

  public userEmail: string;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, 
    private fireDb: AngularFireDatabase, private afoDb: AngularFireOfflineDatabase, 
    private _auth: AuthProvider, private alertCtrl: AlertController) {
    // this.places = fireDb.list('/places');
    this.places = afoDb.list('/places');
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

  addPlace() {
    let prompt = this.alertCtrl.create({
      title: 'Add Place',
      message: "Enter a name and Coordinates",
      inputs: [
        {
          name: 'name',
          placeholder: 'Lahore',
          type: 'string'
        },
        {
          name: 'lat',
          placeholder: '30.12121',
          type: 'number'
        },
        {
          name: 'lon',
          placeholder: '71.23435354',
          type: 'number'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            this.places.push(data);
          }
        }
      ]
    });
    prompt.present();
  }

}
