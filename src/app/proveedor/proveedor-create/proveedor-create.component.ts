import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  proveedor: Proveedor;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an proveedor
    */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new proveedor
  */
  @Output() create = new EventEmitter();

  /**
  * Creates an proveedor
  */
  createProveedor(): Proveedor {
    this.proveedorService.createProveedor(this.proveedor)
      .subscribe(proveedor => {
        this.proveedor = proveedor;
        this.create.emit();
        this.toastrService.success("El proveedor fue creado", "Creacion de Proveedor");

      });
    return this.proveedor;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.proveedor = new Proveedor();
  }

}
