import { Component } from '@angular/core';
import { ModalController, Events, NavController } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places/places';
import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Place } from '../../model/place';

import { PlaceFormModalPage } from '../place-form-modal/place-form-modal';
import { AuthProvider } from "../../providers/auth/auth";

import { PlaceDetail } from "../place-detail/place-detail";

@Component({
    selector: 'page-places',
    templateUrl: 'places.html',
})
export class PlacesPage {

    public isAdmin: boolean;
    public places: AfoListObservable<Place[]>;

    constructor(private modalCtrl: ModalController, private _placeProvider: PlacesProvider, private _auth: AuthProvider,
        private events: Events, private navCtrl: NavController, private afoDb: AngularFireOfflineDatabase) {

        _auth.isAdmin().subscribe(isAdmin => {
            this.isAdmin = isAdmin;
        });

    }

    ionViewDidLoad() {
        this.fetchPlaces();
    }

    private fetchPlaces(): void {
        this.places = this._placeProvider.places();
    }

    switchToPlaceDetailPage(place) {
        this.navCtrl.push(PlaceDetail, { "selected_place": place });
    }

    openModalToCreateNewPlace() {
        let newPlaceFormModal = this.modalCtrl.create(PlaceFormModalPage);
        newPlaceFormModal.present();
    }

}
