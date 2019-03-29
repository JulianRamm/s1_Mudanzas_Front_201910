import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Usuario} from './usuario';

const API_URL = "../../assets/";
const usuarios = '/usuarios.json';

/**
* The service provider for everything related to usuarios
*/
@Injectable()
export class UsuarioService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of usuarios retrieved from the API
    * @returns The list of books in real time
    */
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(API_URL + usuarios);
    }

}