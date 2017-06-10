import {Component} from "@angular/core";
import {AlertController, App, ModalController} from "ionic-angular";
import {PlacesProvider} from "../../providers/places/places";
import {GoogleMapService} from "../../providers/places/google-map.service";
import {AfoListObservable} from "angularfire2-offline/database";
import {Place} from "../../model/place";

import {PlaceFormModalPage} from "../place-form-modal/place-form-modal";
import {AuthProvider} from "../../providers/auth/auth";

import {PlaceDetail} from "../place-detail/place-detail";
import {Point} from "../../model/point";

@Component({
    selector: 'page-places',
    templateUrl: 'places.html',
})
export class PlacesPage {

    public isAdmin: boolean;
    public places: AfoListObservable<Place[]>;
    public modifiedPlacesArray: Place[];

    public myLocation: Point;

    constructor(private app: App, private modalCtrl: ModalController, private _placeProvider: PlacesProvider, private _auth: AuthProvider,
                private _gMap: GoogleMapService, private alertCtrl: AlertController) {

        this.modifiedPlacesArray = [];
        this.myLocation = new Point(0, 0);

        _auth.isAdmin().subscribe(isAdmin => {
            this.isAdmin = isAdmin;
        });

    }

    ionViewDidEnter() {
        this.fetchPlaces();
    }

    onUpdate(place: any): any {
        let placeFormModal = this.modalCtrl.create(PlaceFormModalPage, {placeToUpdate: place});
        placeFormModal.present();
    }

    onDelete(place: any): any {
        this.showDeleteConfirmAlert(place);
    }

    private fetchPlaces(): void {
        this.places = this._placeProvider.places();

        this._placeProvider.places().subscribe(
            list => {
                this.modifiedPlacesArray = [];

                for (let item of list) {
                    this._gMap.calculateDistance(new Point(item.latitude, item.longitude)).subscribe(
                        resp => {
                            item.distanceInMetersVal = resp.rows[0].elements[0].distance.value;
                            item.durationInSecondsVal = resp.rows[0].elements[0].duration.value;

                            item.distanceText = resp.rows[0].elements[0].distance.text;
                            item.durationText = resp.rows[0].elements[0].duration.text;

                            this.modifiedPlacesArray.push(item);
                        }
                    )
                }
            }
        )
    }

    switchToPlaceDetailPage(place) {
        this.app.getRootNav().push(PlaceDetail, {"selected_place": place});
    }

    openModalToCreateNewPlace() {
        let newPlaceFormModal = this.modalCtrl.create(PlaceFormModalPage);
        newPlaceFormModal.present();
    }

    onSelectSort(selectValue) {
        if (selectValue === "near") {
            this.sortByDistance();
        } else if (selectValue === "less_time") {
            this.sortByTime();
        } else {
            this.sortByDistanceDesc();
        }
    }

    private sortByDistance() {
        this.modifiedPlacesArray.sort((a, b) => {
            return a.distanceInMetersVal - b.distanceInMetersVal;
        });
    }

    private sortByTime() {
        this.modifiedPlacesArray.sort((a, b) => {
            return a.durationInSecondsVal - b.durationInSecondsVal;
        });
    }

    private sortByDistanceDesc() {
        this.modifiedPlacesArray.sort((a, b) => {
            return b.distanceInMetersVal - a.distanceInMetersVal;
        });
    }

    private showDeleteConfirmAlert(place: any): void {
        this.alertCtrl.create({
            subTitle: "Are you sure?",
            message: `${place.placeName} will no longer exist in list.`,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: () => this.deletePlace(place)
                }
            ]
        }).present();
    }

    private deletePlace(place: any) {
        this._placeProvider.remove(place.$key);
    }
}
