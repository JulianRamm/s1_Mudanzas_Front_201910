
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { VehiculoService } from '../vehiculo.service';
import { VehiculoDetail } from '../vehiculo-detail';
import { AgendaService } from '../../agenda/agenda.service';
import { Agenda } from '../../agenda/agenda';
@Component({
  selector: 'app-vehiculo-detail',
  templateUrl: './vehiculo-detail.component.html',
  styleUrls: ['./vehiculo-detail.component.scss']
})
export class VehiculoDetailComponent implements OnInit {
  constructor(
    private vehiculoService: VehiculoService,
    private route: ActivatedRoute,) { }
    /**
     * The usuario's login retrieved from the path
     */
    placaVehiculo: string;
    
    /**
     * The usuario whose details are shown
     */
    vehiculoDetail: VehiculoDetail;
    
    agenda: Agenda;
    
    showEdit: boolean;
    
    showAgenda:boolean;
    
    /**
  getVehiculoDetail(): void {
    this.vehiculoService.getVehiculoDetail(this.placaVehiculo)
      .subscribe(vehiculoDetail => {
        this.vehiculoDetail = vehiculoDetail;
      });
  }

  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }
  
   setAgenda(agen: Agenda): void {
    this.agenda = agen;
  }

  ngOnInit() {
    this.placaVehiculo = this.route.snapshot.paramMap.get('placa');
    this.showEdit = false;
    this.showAgenda = false;
    this.vehiculoDetail = new VehiculoDetail();
    this.getVehiculoDetail();
  }
**/
}
