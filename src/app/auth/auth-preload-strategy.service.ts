import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {AuthService} from "./auth.service";
import {switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthPreloadStrategy implements PreloadingStrategy {

  constructor(private auth: AuthService) { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.auth.isLoggedIn()
      .pipe(switchMap((isUserLoggedIn) => (isUserLoggedIn ? fn() : of(null))));
  }

}
