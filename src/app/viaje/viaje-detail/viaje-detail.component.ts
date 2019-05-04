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

  constructor(
    private service: ViajeService,
    private route: ActivatedRoute,
    private router: Router) { }

  getViajeDetail(): void {
    this.service.getViajeDetail(this.loginP, this.conductorId, this.viajeId).subscribe(viaje => { this.viajeDetail = viaje;});
  }
  getViaje(): void{
    this.service.getViaje(this.loginP, this.conductorId)
    .subscribe(viaje => {
       this.viajeDetail = viaje; this.viajeId=viaje.id;
      });
  }
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }
  ngOnInit() {
    this.showEdit = false;
    this.showCreate = false; 
    this.viajeDetail = new ViajeDetail();
    this.getViaje();
  }

}
