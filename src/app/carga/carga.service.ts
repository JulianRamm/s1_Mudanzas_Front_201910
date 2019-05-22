import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Carga } from './carga';
const API_URL = environment.apiURL;
const cargas = 'cargas';
const usuarios = '/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CargaService {
  
  constructor(private http: HttpClient) { }

  getCargas(login: string): Observable<Carga[]> {
    return this.http.get<Carga[]>(API_URL + usuarios + '/' + login + '/' + cargas);
  }
  getCargaDetail(idCarga: number, login: string): Observable<Carga> {
    return this.http.get<Carga>(API_URL + usuarios + '/' + login + '/' + cargas + '/' + idCarga);
  }
  createCarga(login: string, carga:Carga ): Observable<Carga>{
    return this.http.post<Carga>(API_URL + usuarios + '/' + login + '/' + cargas, carga);
  }
  deleteCarga(login: string, idCarga:number ):Observable<void>{
    return this.http.delete<void>(API_URL + usuarios + '/' + login + '/' + cargas + '/'+ idCarga )
  }
  upddateCarga(login: string, idCarga:number,carga:Carga):Observable<Carga>{
    return this.http.put<Carga>(API_URL + usuarios + '/' + login + '/' + cargas + '/' + idCarga, carga);
  }
}
