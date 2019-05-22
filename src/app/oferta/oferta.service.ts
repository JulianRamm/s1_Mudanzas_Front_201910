import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Oferta } from './oferta';
import { environment } from '../../environments/environment';
import { Subasta } from '../subasta/subasta';

const API_URL = environment.apiURL;
const ofertas = '/ofertas'
const subastas = '/subastas';
const usuarios = '/usuarios';
const proveedores = '/proveedores';

/**
* The service provider for everything related to ofertas
*/
@Injectable()
export class OfertaService {
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of tarjetas retrieved from the API
    * @returns The list of books in real time
    */
    getOfertas(id: number): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(API_URL + subastas + '/' + id + ofertas);
    }
    createOfertaUsuario(login: string, subasta: Subasta) {
        return this.http.post<Subasta>(API_URL + usuarios + '/' + login + ofertas + '/', ofertas);
    }

    createOfertaProveedor(login: string, oferta: Oferta): Observable<Oferta> {
        console.log(API_URL + proveedores + '/' + login + ofertas);
        return this.http.post<Oferta>(API_URL + proveedores + '/' + login + ofertas, oferta);
    }

}