import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Vehiculo} from './vehiculo';
import { VehiculoDetail } from './vehiculo-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const proveedores = '/proveedores';
const vehiculos = '/vehiculos';

/**
* The service provider for everything related to vehiculos
*/
@Injectable()
export class VehiculoService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of vehiculos retrieved from the API
    * @returns The list ofvehiculos in real time
    */
    getVehiculos(login: string): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(API_URL + proveedores + '/' + login + vehiculos);
    }
    
    getVehiculoDetail(placaVehiculo): Observable<VehiculoDetail> {
       
        return this.http.get<VehiculoDetail>(API_URL + vehiculos + '/' + placaVehiculo);
    }
    
    createVehiculo(login: string ,vehiculo: Vehiculo): Observable<Vehiculo> {
        return this.http.post<Vehiculo>(API_URL + proveedores + '/' + login + vehiculos, vehiculo);
    }

    /**
    * Updates an usuario
    * @param usuario The usuario's information updated
    * @returns The confirmation that the usuario was updated
    */
    updateVehiculo(vehiculo: VehiculoDetail): Observable<VehiculoDetail> {
        return this.http.put<VehiculoDetail>(API_URL + vehiculos + '/' + vehiculo.placa, vehiculo);
    }

}


