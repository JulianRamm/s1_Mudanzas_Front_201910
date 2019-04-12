import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';


import { SubastaService } from './subasta.service';
import { SubastaListComponent } from './subasta-list/subasta-list.component';
import { SubastaCreateComponent } from '../subasta/subasta-create/subasta-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [SubastaListComponent, SubastaCreateComponent],
  providers: [SubastaService],
  bootstrap: [SubastaListComponent, SubastaCreateComponent],
  exports: [SubastaListComponent, SubastaCreateComponent ]})
export class SubastaModule { }
