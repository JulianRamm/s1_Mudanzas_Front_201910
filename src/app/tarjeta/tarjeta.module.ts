import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {TarjetaService} from './tarjeta.service';
import { TarjetaListComponent } from './tarjeta-list/tarjeta-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
],
declarations: [TarjetaListComponent],
providers: [TarjetaService]
})
export class TarjetaModule { }
