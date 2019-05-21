import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/usuario';
import { Router } from '@angular/router';
import { Proveedor } from '../../proveedor/proveedor';
import { ProveedorService } from '../../proveedor/proveedor.service';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private usuarioService: UsuarioService,
        private proveedorService: ProveedorService,
        private authService: AuthService,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    usuario: Usuario;

    proveedor: Proveedor;

    rolSeleccionado: String;

    roles: String[];

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new usuario
    */
    @Output() create = new EventEmitter();

    /**
  * Creates an usuario
  */
    createUsuario(): Usuario {
        this.usuarioService.createUsuario(this.usuario)
            .subscribe(usuario => {
                this.usuario = usuario;
                this.create.emit();
                this.toastrService.success("El usuario fue creado", "Creacion de Usuario");
                this.authService.login(this.rolSeleccionado);
                this.toastrService.success('Successfully signed up');
                this.router.navigate([`/usuarios/${this.usuario.login}`]);
            });
        return this.usuario;
    }

    /**
  * Creates an proveedor
  */
    createProveedor(): Proveedor {
        this.proveedorService.createProveedor(this.proveedor)
            .subscribe(proveedor => {
                this.proveedor = proveedor;
                this.create.emit();
                this.toastrService.success("El usuario fue creado", "Creacion de Usuario");
                this.authService.login(this.rolSeleccionado);
                this.toastrService.success('Successfully signed up')
                this.router.navigate([`/proveedores/${this.proveedor.login}`]);
            });
        return this.proveedor;
    }

    /**
        * Emits the signal to tell the parent component that the
        * user no longer wants to create an user
        */
    cancelCreation(): void {
        this.cancel.emit();
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