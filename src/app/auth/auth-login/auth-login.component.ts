import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../usuario/usuario';
import { Proveedor } from '../../proveedor/proveedor';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
    ) { }

    usuario: Usuario;

    proveedor: Proveedor;

    rolSeleccionado: String;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.rolSeleccionado);
        this.toastrService.success('Logged in')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
        this.proveedor = new Proveedor();
        this.roles = ['USER', 'ADMIN', 'PROVIDER'];
        this.rolSeleccionado = this.roles[0];
    }

}