import { Component } from '@angular/core';

import { PlacesPage } from '../places/places';
import { ProfilePage } from '../profile/profile';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public isAdmin: boolean;
  public isUser: boolean;

  tab1Root = PlacesPage;
  tab2Root = ProfilePage;

  constructor(private _auth: AuthProvider) {

  }

}
