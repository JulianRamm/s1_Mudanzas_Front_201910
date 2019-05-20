import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions([
            'detail_usuario_permission',
            'create_usuario_permission',
            'edit_usuario_permission',
            'delete_usuario_permission',
            'detail_provider_permission',
            'create_provider_permission',
            'edit_provider_permission',
            'delete_provider_permission',
            'create_tarjeta_permission',
            'delete_tarjeta_permission',
            'create_carga_permission',
            'delete_carga_permission',
            'edit_carga_permission',
            'create_subastas_permission',
            'edit_subasta_permission',
            'delete_subasta_permission',
            'create_oferta_permission',
            'edit_oferta_permission',
            'delete_oferta_permission',
            'create_vehiculo_permission',
            'edit_vehiculo_permission',
            'delete_vehiculo_permission',
            'create_conductor_permission',
            'edit_conductor_permission',
            'delete_conductor_permission'
        ]);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role === 'USER') {
            this.setUserRole();
        } else {
            this.setProviderRole();
        }
    }

    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setUserRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('USER',
            [
                'detail_usuario_permission',
                'create_usuario_permission',
                'edit_usuario_permission',
                'detail_provider_permission',
                'create_tarjeta_permission',
                'delete_tarjeta_permission',
                'create_carga_permission',
                'delete_carga_permission',
                'edit_carga_permission',
                'create_subastas_permission',
                'edit_subasta_permission',
                'delete_subasta_permission'
            ]);
        localStorage.setItem('role', 'USER');
    }

    setProviderRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PROVIDER',
            [
                'detail_usuario_permission',
                'detail_provider_permission',
                'create_provider_permission',
                'edit_provider_permission',
                'create_oferta_permission',
                'edit_oferta_permission',
                'delete_oferta_permission',
                'create_vehiculo_permission',
                'edit_vehiculo_permission',
                'delete_vehiculo_permission',
                'create_conductor_permission',
                'edit_conductor_permission',
                'delete_conductor_permission'
            ]);
        localStorage.setItem('role', 'PROVIDER');
    }

    setAdministratorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN',
            [
                'detail_usuario_permission',
                'create_usuario_permission',
                'edit_usuario_permission',
                'delete_usuario_permission',
                'detail_provider_permission',
                'create_provider_permission',
                'edit_provider_permission',
                'delete_provider_permission',
                'create_tarjeta_permission',
                'delete_tarjeta_permission',
                'create_carga_permission',
                'delete_carga_permission',
                'edit_carga_permission',
                'create_subastas_permission',
                'edit_subasta_permission',
                'delete_subasta_permission',
                'create_oferta_permission',
                'edit_oferta_permission',
                'delete_oferta_permission',
                'create_vehiculo_permission',
                'edit_vehiculo_permission',
                'delete_vehiculo_permission',
                'create_conductor_permission',
                'edit_conductor_permission',
                'delete_conductor_permission'
            ]);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(role): void {
        if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role = 'USER') {
            this.setUserRole();
        }
        else {
            this.setProviderRole();
        }
        this.router.navigateByUrl('/');
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}