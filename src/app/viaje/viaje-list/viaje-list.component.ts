import { Component, OnInit, Input } from '@angular/core';
import {Viaje} from '../viaje';
import{ViajeService} from '../viaje.service';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent implements OnInit {


  @Input() loginP:string;
  @Input() conductorId:number;
  viajes: Viaje[];
  constructor(private viajeService: ViajeService) { }

  ngOnInit() {
    
  }

}
