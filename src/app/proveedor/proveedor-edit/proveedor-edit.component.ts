import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { ProveedorDetail } from '../proveedor-detail';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  @Input() proveedor: ProveedorDetail;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an proveedor
    */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new proveedor
  */
  @Output() update = new EventEmitter();

  /**
    * Updates the information of the proveedor
    */
   editProveedor(): void {
    this.proveedorService.updateProveedor(this.proveedor)
        .subscribe(() => {
            this.toastrService.success("The proveedor's information was updated", "Usuario edition");
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
