import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  private isLoggedIn: boolean;
  private authWatchDog = new Subject();

  constructor(public http: Http) {
    this.isLoggedIn = false;
  }

  public login(): void {
    this.authWatchDog.next(true);
  }

  public logout(): void {
    this.authWatchDog.next(false);
  }

  public watchIsLoggedIn(): Subject<boolean> {
    return this.authWatchDog;
  }

}
