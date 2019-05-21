import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../usuario/usuario';
import { Proveedor } from '../../proveedor/proveedor';
import { Router } from '@angular/router';

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
        private router: Router
    ) { }

    usuario: Usuario;

    proveedor: Proveedor;

    rolSeleccionado: String;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        if (this.rolSeleccionado == 'USER') {
            this.authService.login(this.rolSeleccionado);
            console.log(this.rolSeleccionado);
            this.router.navigate([`/usuarios/${this.usuario.login}`]);
        }
        else if (this.rolSeleccionado == 'PROVIDER') {
            this.authService.login(this.rolSeleccionado);
            console.log(this.rolSeleccionado);
            console.log(this.authService);
            this.router.navigate([`/proveedores/${this.usuario.login}`]);
        }
        else {
            this.authService.login(this.rolSeleccionado);
            this.router.navigate(['/usuarios/']);
        }
        this.toastrService.success('Logged in')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
        this.roles = ['USER', 'ADMIN', 'PROVIDER'];
        this.rolSeleccionado = this.roles[0];
    }

}