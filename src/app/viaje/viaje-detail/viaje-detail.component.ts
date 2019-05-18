import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajeService } from '../viaje.service';
import { ViajeDetail } from '../viaje-detail';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {

  @Input() loginP: string;
  @Input() conductorId: number;

  viajeId: number;
  showCreate: boolean;
  showEdit: boolean;
  viajeDetail: ViajeDetail;
  verCargas:boolean;

  constructor(
    private service: ViajeService,
    private route: ActivatedRoute,
    private router: Router) { }

  getViaje(): void{
    this.service.getViaje(this.loginP, this.conductorId)
    .subscribe(viaje => {
       this.viajeDetail = viaje;console.log(viaje);
      },
      error => this.showCreate=true);
  }
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  convertirFechaChevere(fecha): string {
    let fechaC = fecha.split("-", 3);
    let anio = fechaC[0];
    let mes = fechaC[1];
    let s = fechaC[2].split("T", 2);
    let dia = s[0];
    let h = s[1].split(":", 2);
    let hora = h[0];
    let min = h[1];
    return dia + "/" + mes + "/" + anio + " " + hora + ":" + min;
  }

  viajeEliminado(){
    this.showCreate=true;
    this.viajeDetail=null;
  }
  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }

  ngOnInit() {
    this.showEdit = false;
    this.showCreate = false; 
    this.verCargas = false;
    this.getViaje();
  }
}