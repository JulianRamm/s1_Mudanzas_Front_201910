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

    

    createAgenda(placa, ajenda): Observable<Agenda> {
        return this.http.post<Agenda>(API_URL + vehiculos + '/' + placa + agenda, ajenda);
    }

}


