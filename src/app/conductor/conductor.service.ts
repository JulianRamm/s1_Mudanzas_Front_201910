import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from "@angular/common/http";

import { Conductor } from './conductor';
//import { ConductorDetail } from './conductor-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const proveedores = '/proveedores';
const conductores = '/conductores';

/**
* The service provider for everything related to conductores
*/
@Injectable()
export class ConductorService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of conductores retrieved from the API
    * @returns The list of conductores in real time
    */
    getConductores(login: string): Observable<Conductor[]> {
        return this.http.get<Conductor[]>(API_URL +proveedores+'/'+login+ conductores);
    }

    /**
    * Returns the Observable object with the details of an usuario retrieved from the API
    * @returns The usuario details
    *
    getConductorDetail(conductorLogin): Observable<ConductorDetail> {
        return this.http.get<ConductorDetail>(API_URL + conductores + '/' + conductorLogin);
    }

    /*
    createConductor(usuario): Observable<Conductor> {
        return this.http.post<Conductor>(API_URL + conductores, usuario);
    }

  */

}