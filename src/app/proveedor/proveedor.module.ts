import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ProveedorListComponent} from './proveedor-list/proveedor-list.component';
import {ProveedorService} from './proveedor.service';
import { ConductorModule } from '../conductor/conductor.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
//import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ConductorModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [ProveedorListComponent,  ProveedorDetailComponent/*, ProveedorCreateComponent*/],
    providers: [ProveedorService],
    bootstrap: [ProveedorListComponent]
})
export class ProveedorModule {}