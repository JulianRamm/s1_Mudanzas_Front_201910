import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Subasta} from './subasta';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const usuarios = '/usuarios'
const subastas = '/subastas';

/**
* The service provider for everything related to usuarios
*/
@Injectable()
export class SubastaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of tarjetas retrieved from the API
    * @returns The list of books in real time
    */
    getSubastas(login: string): Observable<Subasta[]> {
        return this.http.get<Subasta[]>(API_URL + usuarios + '/' + login + subastas);
    }

    getSubastaDetail(id:number, login: String): Observable<Subasta>{
        return this.http.get<Subasta>(API_URL + usuarios + '/' + login + subastas+ '/'+ id);
    }


}