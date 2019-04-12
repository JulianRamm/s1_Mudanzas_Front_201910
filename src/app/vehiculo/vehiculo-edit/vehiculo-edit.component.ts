import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {VehiculoService } from '../vehiculo.service';
import { ToastrService } from 'ngx-toastr';
import { VehiculoDetail } from '../vehiculo-detail';
@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.scss']
})
export class VehiculoEditComponent implements OnInit {

  constructor(
  private vehiculoService: VehiculoService,
    private toastrService: ToastrService) { }
    
    @Input() vehiculo: VehiculoDetail;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new usuario
  */
  @Output() update = new EventEmitter();

  /**
    * Updates the information of the usuario
    */
   editVehiculo(): void {
    this.vehiculoService.updateVehiculo(this.vehiculo)
        .subscribe(() => {
            this.toastrService.success("The vehiculo's information was updated", "Vehiculo edition");
        });
    this.update.emit();
}

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to create an user
   */
  cancelEdition(): void {
    this.cancel.emit();
  }


  ngOnInit() {
  }

}
