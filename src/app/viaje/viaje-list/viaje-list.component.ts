import { Component, OnInit } from '@angular/core';
import {Viaje} from '../viaje';
import{ViajeService} from '../viaje.service';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent implements OnInit {

  viajes: Viaje[];
  constructor(private viajeService: ViajeService) { }
  
  getViajes(): void{
    this.viajeService.getViajes().subscribe(viajes=>this.viajes=viajes);
  }
  ngOnInit() {
    this.getViajes();
  }

}
