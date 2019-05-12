import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajeService } from '../viaje.service';
import { ViajeDetail } from '../viaje-detail';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConductorDetail } from '../../conductor/conductor-detail';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {

  @Input() loginP: string;
  @Input() conductorId: number;
  @Input() hayViaje: boolean;
  @Input() eliminado : EventEmitter<any> = new EventEmitter;

  viajeId: number;
  showCreate: boolean;
  showEdit: boolean;
  viajeDetail: ViajeDetail;

  constructor(
    private service: ViajeService,
    private route: ActivatedRoute,
    private router: Router) { }

  getViaje(): void {
   
    this.service.getViaje(this.loginP, this.conductorId)
      .subscribe(viaje => this.viajeDetail = viaje,
      error => this.showCreate=true);

   
  }
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }
  viajeEliminado() {
    this.showCreate = true;
    this.viajeDetail =null;
   
  }
  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }
  ngOnInit() {
    console.log(this.hayViaje);
    this.showEdit = false;
    this.showCreate = false;
    this.getViaje();
  }
}
