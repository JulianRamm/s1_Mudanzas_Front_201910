import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';

import {UsuarioModule} from "./usuario/usuario.module";
import {ProveedorModule} from "./proveedor/proveedor.module";
import {TarjetaModule} from "./tarjeta/tarjeta.module";
import { ViajeModule } from './viaje/viaje.module';
import { CargaModule } from './carga/carga.module';
import { SubastaModule } from './subasta/subasta.module';
import { OfertaModule } from './oferta/oferta.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConductorModule } from './conductor/conductor.module';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        UsuarioModule,
        TarjetaModule,
        ProveedorModule,
        ViajeModule,
        CargaModule,
        SubastaModule,
        OfertaModule,
        ConductorModule,
        AgmCoreModule,
        AgmDirectionModule,
        AngularWeatherWidgetModule,
        MDBBootstrapModule,
        HomeModule,
        NgxPermissionsModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
