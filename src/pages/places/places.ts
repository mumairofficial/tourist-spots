import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places/places';
import { AfoListObservable } from 'angularfire2-offline/database';
import { Place } from '../../model/place';

import { PlaceFormModalPage } from '../place-form-modal/place-form-modal';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  public places: AfoListObservable<Place[]>;

  constructor(private modalCtrl: ModalController, private _placeProvider: PlacesProvider) {
  }

  ionViewDidLoad() {
    this.fetchPlaces();
  }

  private fetchPlaces(): void {
    this.places = this._placeProvider.places();
  }

  openModalToCreateNewPlace() {
    let newPlaceFormModal = this.modalCtrl.create(PlaceFormModalPage);
    newPlaceFormModal.present();
  }

  doRefresh(refresher) {
    this._placeProvider.places().subscribe(data => {
      refresher.complete();
    });
  }

}
