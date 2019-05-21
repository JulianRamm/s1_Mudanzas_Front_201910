import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ViajeService } from '../viaje.service';
import { ToastrService } from 'ngx-toastr';
import { Viaje } from '../viaje';
import { ViajeDetail } from '../viaje-detail';

@Component({
  selector: 'app-viaje-create',
  templateUrl: './viaje-create.component.html',
  styleUrls: ['./viaje-create.component.css']
})
export class ViajeCreateComponent implements OnInit {

  constructor(
    private ViajeService: ViajeService,
    private toastrService: ToastrService
  ) { }
  
  viaje:Viaje;
  @Input() loginP: string;
  @Input() conductorId: number;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an Viaje
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new Viaje
   */
   @Output() create = new EventEmitter();
  createViaje(): Viaje {
    this.ViajeService.createViaje(this.conductorId,this.viaje, this.loginP)
      .subscribe((viaje:ViajeDetail)=> {
        this.viaje = viaje;
        this.create.emit();
        this.toastrService.success("El Viaje fue creado", "Creacion de Viaje");
      });
    return this.viaje;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.viaje = new Viaje();
  }


}
