import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { Point } from "../../model/point";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Events } from "ionic-angular";

@Injectable()
export class GoogleMapService {

    private location: Point;

    constructor(private _loc: Geolocation, private http: Http, private events: Events) {

    }

    calculateDistance(destination: Point): any {
        return Observable.fromPromise(this._loc.getCurrentPosition())
            .map(location => new Point(location.coords.latitude, location.coords.longitude))
            .flatMap(origin => {
                return this.http.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.lat},${origin.lon}&destinations=${destination.lat},${destination.lon}&key=AIzaSyCLh1nkJTtAAM6PkHIgbwGmJNu2j2MKQ3I`)
            })
            .map(response => JSON.parse(response.text()))
    }
}