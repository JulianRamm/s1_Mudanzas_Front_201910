import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { UsuarioModule } from '../usuario/usuario.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ProveedorModule } from '../proveedor/proveedor.module';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioModule,
    ProveedorModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AuthModule
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, AuthSignUpComponent, AuthLoginComponent]
})
export class HomeModule { }
