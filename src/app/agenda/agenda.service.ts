import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Agenda} from './agenda';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const vehiculos = '/vehiculos'
const agenda = '/agenda';

/**
* The service provider for everything related to usuarios
*/
@Injectable()
export class AgendaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of tarjetas retrieved from the API
    * @returns The list of books in real time
    */
//    getTarjetas(login: string): Observable<Tarjeta[]> {
//        return this.http.get<Tarjeta[]>(API_URL + usuarios + '/' + login + tarjetas);
//    }

    createAgenda(placa, ajenda): Observable<Agenda> {
        return this.http.post<Agenda>(API_URL + vehiculos + '/' + placa + agenda, ajenda);
    }

}


