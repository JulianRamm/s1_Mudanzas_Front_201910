import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViajeService } from './viaje.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ViajeDetailComponent } from './viaje-detail/viaje-detail.component';
import { ViajeCreateComponent } from './viaje-create/viaje-create.component';
import { ViajeEditComponent } from './viaje-edit/viaje-edit.component';
import { ViajeDeleteComponent } from './viaje-delete/viaje-delete.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ViajeListComponent, ViajeDetailComponent, ViajeCreateComponent, ViajeEditComponent, ViajeDeleteComponent],
  bootstrap: [ViajeListComponent, ViajeDetailComponent],
  exports: [ViajeListComponent, ViajeCreateComponent, ViajeDetailComponent],
  providers: [ViajeService]
})
export class ViajeModule { }
