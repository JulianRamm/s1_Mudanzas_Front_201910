import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViajeService } from '../viaje.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viaje-delete',
  templateUrl: './viaje-delete.component.html',
  styleUrls: ['./viaje-delete.component.css']
})
export class ViajeDeleteComponent implements OnInit {

  constructor(private viajeService: ViajeService, private route: ActivatedRoute) { }
  @Input() loginP: string;
  @Input() conductorId: number;
  @Input() viajeId: number;
  
  @Output() notifyDelete: EventEmitter<any> = new EventEmitter();

  confirmDelete: boolean = false;
  deleteViaje(): void {
    this.viajeService.deleteViaje(this.loginP, this.conductorId, this.viajeId).
      subscribe(() =>
        console.log(`Viaje con id = ${this.viajeId} eliminado`),
        (err) => console.log(err)
      );
      this.notifyDelete.emit(this.viajeId);
  }
  ngOnInit() {
  }

}
