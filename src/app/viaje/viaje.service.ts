import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Viaje} from './viaje';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const viajes = '/viajes';

@Injectable()
export class ViajeService {

  constructor(private http :HttpClient) { }

  getViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(API_URL + viajes);
}
}
