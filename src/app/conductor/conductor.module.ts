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


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ViajeModule
  ],
  declarations: [ConductorListComponent, ConductorCreateComponent, ConductorDetailComponent],
  providers: [ConductorService],
  bootstrap: [ConductorListComponent, ConductorCreateComponent],
  exports: [ConductorListComponent,ConductorCreateComponent ]
})
export class ConductorModule { }
