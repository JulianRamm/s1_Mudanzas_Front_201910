import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const usuarios = '/usuarios';

/**
* The service provider for everything related to usuarios
*/
@Injectable()
export class UsuarioService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of usuarios retrieved from the API
    * @returns The list of usuarios in real time
    */
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(API_URL + usuarios);
    }

    /**
    * Returns the Observable object with the details of an usuario retrieved from the API
    * @returns The usuario details
    */
    getUsuarioDetail(usuarioLogin): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuarioLogin);
    }

    createUsuario(usuario: Usuario): any {
        throw new Error("Method not implemented.");
    }

}