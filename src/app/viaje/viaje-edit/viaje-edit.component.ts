import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViajeService } from '../viaje.service';
import { ToastrService } from 'ngx-toastr';
import { ViajeDetail } from '../viaje-detail';

@Component({
  selector: 'app-viaje-edit',
  templateUrl: './viaje-edit.component.html',
  styleUrls: ['./viaje-edit.component.css']
})
export class ViajeEditComponent implements OnInit {

  constructor(
    private ViajeService: ViajeService,
    private toastrService: ToastrService
  ) { }

  @Input() viaje:ViajeDetail;
  @Input() loginP: string;
  @Input() conductorId: number;
  @Output() cancel = new EventEmitter();
  @Output() edit = new EventEmitter();

 editViaje(): void {
    this.ViajeService.updateViaje(this.conductorId,this.viaje, this.loginP)
      .subscribe( ()=> {
        this.toastrService.success("El Viaje fue actualizado", "actualización de Viaje");
      });
      this.edit.emit();
  }

  cancelEdit(): void {
    this.cancel.emit();
  }

  ngOnInit() {
  }

}
