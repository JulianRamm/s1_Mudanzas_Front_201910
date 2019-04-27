import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";

import { Proveedor } from './proveedor';
import { ProveedorDetail } from './proveedor-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const proveedores = '/proveedores';

/**
* The service provider for everything related to proveedores
*/
@Injectable()
export class ProveedorService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of proveedores retrieved from the API
    * @returns The list of proveedores in real time
    */
    getProveedors(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL + proveedores);
    }

    /**
    * Returns the Observable object with the details of an proveedor retrieved from the API
    * @returns The proveedor details
    */
    getProveedorDetail(proveedorLogin): Observable<ProveedorDetail> {
        return this.http.get<ProveedorDetail>(API_URL + proveedores + '/' + proveedorLogin);
    }

    createProveedor(proveedor): Observable<Proveedor> {
        return this.http.post<Proveedor>(API_URL + proveedores, proveedor);
    }

    /**
    * Updates an proveedor
    * @param proveedor The proveedor's information updated
    * @returns The confirmation that the proveedor was updated
    */
    updateProveedor(proveedor: ProveedorDetail): Observable<ProveedorDetail> {
        return this.http.put<ProveedorDetail>(API_URL + proveedores + '/' + proveedor.login, proveedor);
    }


}