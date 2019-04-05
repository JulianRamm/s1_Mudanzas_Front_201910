import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaListComponent } from './carga-list/carga-list.component';
import { CargaService } from './carga.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CargaCreateComponent } from './carga-create/carga-create.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [CargaListComponent, CargaCreateComponent],
  providers: [CargaService],
  bootstrap: [CargaListComponent, CargaCreateComponent],
  exports: [CargaListComponent,CargaCreateComponent ]
})
export class CargaModule { }
