import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgendaService } from './agenda.service';
//import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AgendaEditComponent } from '../agenda/agenda-edit/agenda-edit.component';
//import { AgendaCreateComponent } from './agenda-create/agenda-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
 // declarations: [TarjetaListComponent, TarjetaCreateComponent],
  providers: [AgendaService],
 declarations: [AgendaEditComponent],
 // bootstrap: [TarjetaListComponent],
 // exports: [TarjetaListComponent]
})
export class AgendaModule { }




