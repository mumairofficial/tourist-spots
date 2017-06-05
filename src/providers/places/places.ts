import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireOfflineDatabase, AfoListObservable, AfoObjectObservable } from 'angularfire2-offline/database';

import 'rxjs/add/operator/map';
import { Place } from '../../model/place';

@Injectable()
export class PlacesProvider {

  private placesList: AfoListObservable<Place[]>;

  constructor(public http: Http, private afoDb: AngularFireOfflineDatabase) {
    this.placesList = this.places();
  }

  public places(): AfoListObservable<Place[]> {
    return this.afoDb.list('/places');
  }

  public add(newPlace: any): any {
    return this.placesList.push(newPlace);
  }

  public remove(key): void {

  }

  public update(key, updatedObject: Place): void {

  }

}
