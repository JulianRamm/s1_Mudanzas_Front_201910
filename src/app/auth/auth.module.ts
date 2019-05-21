import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';
import { Proveedor } from '../proveedor/proveedor';
import { Usuario } from '../usuario/usuario';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [],
    providers: [AuthService],
    bootstrap: []
})
export class AuthModule { }