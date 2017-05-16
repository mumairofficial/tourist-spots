import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { PlacesPage } from '../places/places';
import { ProfilePage } from '../profile/profile';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public isAdmin: boolean;
  public isUser: boolean;

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = DashboardPage;
  tab4Root = PlacesPage;

  constructor(private _auth: AuthProvider) {

    // TODO: auth service which tell wether loggedin user is admin or normal user
    this.watchUserLoggedInState();

  }

  private watchUserLoggedInState(): void {
    this._auth.watchIsLoggedIn().subscribe(authStatus => {
      console.log("subscribe to watch dog: ", authStatus);
      this.isAdmin = authStatus;
    })
  }
}
