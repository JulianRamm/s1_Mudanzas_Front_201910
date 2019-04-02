import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Tarjeta} from './tarjeta';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const tarjetas = '/usuarios/luismigolondo/tarjetas';

/**
* The service provider for everything related to usuarios
*/
@Injectable()
export class TarjetaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of tarjetas retrieved from the API
    * @returns The list of books in real time
    */
    getTarjetas(): Observable<Tarjeta[]> {
        return this.http.get<Tarjeta[]>(API_URL + tarjetas);
    }

}