import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {AfoListObservable, AngularFireOfflineDatabase} from "angularfire2-offline/database";

import "rxjs/add/operator/map";
import {Place} from "../../model/place";
import {GoogleMapService} from "./google-map.service";

@Injectable()
export class PlacesProvider {

  private placesList: AfoListObservable<Place[]>;

  constructor(public http: Http, private afoDb: AngularFireOfflineDatabase, private gMap: GoogleMapService) {
    this.placesList = this.places();
  }

  public places(): AfoListObservable<Place[]> {
    return this.afoDb.list('/places');
  }

  public add(newPlace: any): any {
    return this.placesList.push(newPlace);
  }

  public remove(key): void {
    this.placesList.remove(key);
  }

  public update(key, updatedObject: Place): void {
    this.placesList.update(key, updatedObject);
  }

}
