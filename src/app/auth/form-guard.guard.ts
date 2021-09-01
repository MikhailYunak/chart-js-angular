import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../admin/confirm-dialog/confirm-dialog.component";
import {SafeData} from "./safe-data";

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<SafeData> {
  constructor(private dialog: MatDialog) {}
  canDeactivate(
    component: SafeData
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!component.isDataSaved()) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    }
    return of(true);
  }

}
