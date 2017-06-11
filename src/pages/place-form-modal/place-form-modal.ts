import {Component} from "@angular/core";
import {NavParams, ToastController, ViewController} from "ionic-angular";
import {PlacesProvider} from "../../providers/places/places";
import {FormBuilder, Validators} from "@angular/forms";

const PLACE_TO_UPDATE_KEY: string = "placeToUpdate";

@Component({
    selector: 'page-place-form-modal',
    templateUrl: 'place-form-modal.html',
})
export class PlaceFormModalPage {

    public place: any;
    public placeInputForm: any;
    private placeToUpdate: any;

    constructor(private viewCtrl: ViewController, private _placeProvider: PlacesProvider,
                private navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder) {

        this.placeToUpdate = navParams.get(PLACE_TO_UPDATE_KEY);
        this.place = this.placeToUpdate || {};

        this.initiateFormBuilder();
    }

    private initiateFormBuilder() {
        this.placeInputForm = this.formBuilder.group({
            placeName: [this.place.placeName, Validators.compose([Validators.maxLength(80), Validators.required])],
            district: [this.place.district, Validators.compose([Validators.maxLength(80), Validators.required])],
            country: [this.place.country, Validators.compose([Validators.maxLength(80), Validators.required])],
            latitude: [this.place.latitude, Validators.compose([Validators.maxLength(30), Validators.required])],
            longitude: [this.place.longitude, Validators.compose([Validators.maxLength(30), Validators.required])],
            description: [this.place.description, Validators.compose([Validators.maxLength(30), Validators.required])],
            photoUrl: [this.place.photoUrl, Validators.compose([Validators.required])]
        });
    }


    dismiss() {
        this.viewCtrl.dismiss();
    }

    onSaveOrUpdate(values): void {
        if (!this.navParams.get(PLACE_TO_UPDATE_KEY)) {
            this.save(values);
        } else {
            this.update(this.placeToUpdate.$key, values)
        }
    }

    private save(values: any): void {
        values.distance = 0;
        values.duration = 0;
        this._placeProvider.add(values);
        this.presentToast("Place was saved successfully");
        this.placeInputForm.reset();
    }

    private update(key: string, updatedValues: any): void {
        this._placeProvider.update(key, updatedValues);
        this.presentToast("Place was updated successfully");
        this.placeInputForm.reset();
        this.dismiss();
    }

    presentToast(message: string) {
        this.toastCtrl.create({
            message: message,
            duration: 2000
        }).present();
    }

}
