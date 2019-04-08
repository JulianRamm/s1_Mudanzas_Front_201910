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
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule} from 'agm-direction';
import { UsuarioMapComponent } from '../usuario/usuario-map/usuario-map.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        TarjetaModule,
        CargaModule,
        SubastaModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB46hhGR-5V8I80sTmWPmHztp9buXoCCPE'
        }),
        AgmDirectionModule
    ],
    declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioEditComponent, UsuarioMapComponent],
    providers: [UsuarioService],
    bootstrap: [UsuarioListComponent]
})
export class UsuarioModule {}