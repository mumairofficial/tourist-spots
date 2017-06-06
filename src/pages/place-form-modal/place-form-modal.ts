import { Component } from '@angular/core';
import { ToastController, ViewController } from 'ionic-angular';

import { AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Place } from "../../model/place";
import { PlacesProvider } from "../../providers/places/places";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'page-place-form-modal',
    templateUrl: 'place-form-modal.html',
})
export class PlaceFormModalPage {

    public place: Place;
    public placeInputForm: any;

    constructor(private viewCtrl: ViewController, private _placeProvider: PlacesProvider,
        private afoDb: AngularFireOfflineDatabase, private toastCtrl: ToastController, private formBuilder: FormBuilder) {
        this.place = new Place("", 0, 0, "", "", "");

        this.initiateFormBuilder();
    }

    private initiateFormBuilder() {
        this.placeInputForm = this.formBuilder.group({
            placeName: ['', Validators.compose([Validators.maxLength(80), Validators.required])],
            district: ['', Validators.compose([Validators.maxLength(80), Validators.required])],
            country: ['Pakistan', Validators.compose([Validators.maxLength(80), Validators.required])],
            latitude: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
            longitude: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
            description: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
            photoUrl: ['', Validators.compose([Validators.required])]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlaceFormModalPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    saveNewPlace(values) {
        values.distance = 0;
        values.duration = 0;
        this._placeProvider.add(values);
        this.presentToast("Place was saved successfully");
        this.placeInputForm.reset();
    }

    presentToast(message: string) {
        this.toastCtrl.create({
            message: message,
            duration: 2000
        }).present();
    }

}
