import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { OfertaService } from './oferta.service';
import { OfertaListComponent } from '../oferta/oferta-list/oferta-list.component';
import { OfertaCreateComponent } from './oferta-create/oferta-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [OfertaListComponent, OfertaCreateComponent],
  providers: [OfertaService],
  bootstrap: [OfertaListComponent],
  exports: [OfertaListComponent]})
export class OfertaModule { }
