import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { FlickrService } from "../../providers/places/flickr-service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetail {

  public place: any;
  public imageUrls: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afoDb: AngularFireOfflineDatabase,
    private flickrService: FlickrService, private _sanitizer: DomSanitizer) {
    this.place = this.navParams.data.selected_place;
  }

  ionViewDidLoad() {
    this.flickrService.getResult(this.place.district).subscribe(
      imageUrls => {
        this.imageUrls = imageUrls;
      }
    );
  }

  getBackground(imageUrl) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`);
  }

  toNumber(val: string): number {
    return Number(val);
  }
  
}
