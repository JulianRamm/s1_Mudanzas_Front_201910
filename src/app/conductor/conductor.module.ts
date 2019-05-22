import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorService } from './conductor.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConductorCreateComponent } from './conductor-create/conductor-create.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ViajeModule } from '../viaje/viaje.module';
import { ConductorEditComponent } from '../conductor/conductor-edit/conductor-edit.component';
import { ConductorDeleteComponent } from './conductor-delete/conductor-delete.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ViajeModule
  ],
  declarations: [ConductorListComponent, ConductorCreateComponent, ConductorDetailComponent, ConductorEditComponent,ConductorDeleteComponent],
  providers: [ConductorService],
  bootstrap: [ConductorListComponent, ConductorCreateComponent],
  exports: [ConductorListComponent]


})
export class ConductorModule { }
