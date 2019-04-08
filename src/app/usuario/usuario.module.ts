import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioService} from './usuario.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { TarjetaModule } from '../tarjeta/tarjeta.module';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { CargaModule } from '../carga/carga.module';
import { SubastaModule } from '../subasta/subasta.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        TarjetaModule,
        CargaModule,
        SubastaModule
    ],
    declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioEditComponent],
    providers: [UsuarioService],
    bootstrap: [UsuarioListComponent]
})
export class UsuarioModule {}