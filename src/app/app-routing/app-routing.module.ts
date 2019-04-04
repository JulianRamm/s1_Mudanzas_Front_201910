import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';

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
    /**{
        path: 'home',
        component: UsuarioListComponent
        //AuthLoginComponent
    },**/
    {
        path: '**',
        redirectTo: 'home',
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
            }
        ]
    }
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
