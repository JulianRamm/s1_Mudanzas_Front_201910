/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {VehiculoListComponent} from './vehiculo-list/vehiculo-list.component';
import {VehiculoService} from './vehiculo.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
//import { VehiculoDetailComponent } from './vehiculo-detail/vehiculo-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [VehiculoListComponent],
    providers: [VehiculoService]
})
export class VehiculoModule {}


