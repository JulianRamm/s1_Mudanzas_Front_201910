import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Viaje } from './viaje';

import { environment } from '../../environments/environment';
import { ViajeDetail } from './viaje-detail';

const API_URL = environment.apiURL;
const viajes = 'viajes';
const proveedores = 'proveedores';
const conductores = 'conductores';

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) { }

  getViajes(loginP: string, conductorId: number): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + conductorId + '/' + viajes);
  }

  getViajeDetail(loginP: string, conductorId: number, viajeId: number): Observable<ViajeDetail> {
    return this.http.get<ViajeDetail>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + conductorId + '/' + viajes + '/' + viajeId);
  }
  createViaje(condcutorId: number, viaje: Viaje, loginP: string): Observable<Viaje> {
    return this.http.post<Viaje>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + condcutorId + '/' + viajes, viaje);
  }
}
