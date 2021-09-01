import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class HomeModule { }
