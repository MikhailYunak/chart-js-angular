import { Injectable } from '@angular/core';
import { CanActivateChild, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivateChild {
  constructor(private auth: AuthService) {}
  canActivateChild():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('I am checking permissions....');
    return this.auth.hasPermissions();
  }
}
