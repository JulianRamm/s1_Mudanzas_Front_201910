import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { ProveedorListComponent } from '../proveedor/proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from '../proveedor/proveedor-detail/proveedor-detail.component';


import { ViajeListComponent } from '../viaje/viaje-list/viaje-list.component';
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';
import { ViajeDetailComponent } from '../viaje/viaje-detail/viaje-detail.component';
import { ConductorDetailComponent } from '../conductor/conductor-detail/conductor-detail.component';
import { VehiculoDetailComponent } from '../vehiculo/vehiculo-detail/vehiculo-detail.component';
import { UsuarioEditComponent } from '../usuario/usuario-edit/usuario-edit.component';

import { HomePageComponent } from '../home/home-page/home-page.component';


const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'usuarios',
        children: [
            {
                path: 'list',
                component: UsuarioListComponent
            },
            {
                path: ':login',
                component: UsuarioDetailComponent
            },
            {
                path: ':login/edit',
                component: UsuarioEditComponent
            }
            
        ]
    },
    {
        path: 'proveedores',
        children: [
            {
                path: 'list',
                component: ProveedorListComponent
            },
            {
                path: ':login',

                component: ProveedorDetailComponent
            },
            {
                path: ':login/conductores/:id',
                component: ConductorDetailComponent
            }
        ]
    },

    {
        path: 'proveedores',
        children: [
            {
                path: 'list',
                component: ProveedorListComponent
            },
            {
                path: ':login',

                component: ProveedorDetailComponent
            },
            {
                path: ':login/vehiculos/:placa',
                component: VehiculoDetailComponent,

            }
        ]
    },
    
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
