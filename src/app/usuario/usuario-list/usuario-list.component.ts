import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario-list.component.html',
    styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

    usuario_login: string;
    selectedUsuario: Usuario;

    /**
     * Constructor for the component
     * @param usuarioService The author's services provider
     */
    constructor(private usuarioService: UsuarioService) { }

    /**
    * Shows or hides the usuairo-create-component
    */
    showCreate: boolean;

    /**
     * The list of usuarios which belong to the BookStore
     */
    usuarios: Usuario[];

    onSelected(login: string): void {
        this.showCreate = false;
        this.usuario_login = login;
        this.selectedUsuario = new UsuarioDetail();
        this.getUsuarioDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedUsuario) {
            this.selectedUsuario = undefined;
            this.usuario_login = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_login)
            .subscribe(selectedUsuario => {
                this.selectedUsuario = selectedUsuario;
            });
    }
    /**
     * Asks the service to update the list of usuarios
     */
    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => this.usuarios = usuarios);
            alert(this.usuarios);
    }

    deleteUser(usuarioLogin): void {
        this.usuarioService.deleteUser(usuarioLogin);
        this.getUsuarios();
    }

    /**
     * This will initialize the component by retrieving the list of usuarios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.selectedUsuario = undefined;
        this.usuario_login = undefined;
        this.getUsuarios();
    }
}