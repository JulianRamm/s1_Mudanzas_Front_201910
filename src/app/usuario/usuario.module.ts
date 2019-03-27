import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPermissionsModule,
        CommonModule,
        FormsModule
    ],
    declarations: [UsuarioListComponent]
})
export class UsuarioModule {}