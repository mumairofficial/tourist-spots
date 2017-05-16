import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-place-form-modal',
  templateUrl: 'place-form-modal.html',
})
export class PlaceFormModalPage {

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceFormModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveNewPlace() {
    console.log('save new place was clicked!');
  }
}
