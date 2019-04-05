import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
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
}
