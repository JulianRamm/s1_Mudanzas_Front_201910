import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { UsuarioCreateComponent } from '../usuario/usuario-create/usuario-create.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UsuarioModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, UsuarioCreateComponent]
})
export class HomeModule { }
