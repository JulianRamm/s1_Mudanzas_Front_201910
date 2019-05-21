import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Viaje } from './viaje';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
import { ViajeDetail } from './viaje-detail';


const API_URL = environment.apiURL;
const viajes = 'viajes';
const proveedores = 'proveedores';
const conductores = 'conductores';

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) 
    { }

  getViaje(loginP: string, conductorId: number) : Observable<ViajeDetail>{
    return this.http.get<ViajeDetail>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + conductorId + '/' + viajes )
    .catch(this.hayError);  
  }

  hayError(error: HttpErrorResponse){
    return Observable.throw(error.message||'Server error');
  }

  getViajeDetail(loginP: string, conductorId: number, viajeId: number): Observable<ViajeDetail> {
    return this.http.get<ViajeDetail>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + conductorId + '/' + viajes + '/' + viajeId);
  }

  createViaje(condcutorId: number, viaje: Viaje, loginP: string): Observable<Viaje> {
    return this.http.post<Viaje>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + condcutorId + '/' + viajes, viaje)
  }

  updateViaje(condcutorId: number, viaje: Viaje, loginP: string): Observable<ViajeDetail>{
    return this.http.put<ViajeDetail>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + condcutorId + '/' + viajes , viaje);
  }

  deleteViaje(loginP: string, conductorId: number, viajeId: number): Observable<void>{
    return this.http.delete<void>(API_URL + '/' + proveedores + '/' + loginP + '/' + conductores + '/' + conductorId + '/' + viajes + '/' + viajeId);
  }
  
}
