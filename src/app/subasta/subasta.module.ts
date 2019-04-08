import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { SubastaService } from './subasta.service';
import { SubastaListComponent } from './subasta-list/subasta-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [SubastaListComponent],
  providers: [SubastaService],
  bootstrap: [SubastaListComponent],
  exports: [SubastaListComponent]
})
export class SubastaModule { }
