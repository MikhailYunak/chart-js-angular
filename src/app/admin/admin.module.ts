import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ListComponent } from './list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddProductComponent,
    AddUserComponent,
    ConfirmDialogComponent,
    ListComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
