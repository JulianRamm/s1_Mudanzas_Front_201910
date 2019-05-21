import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CargaService } from '../carga.service';
import { ToastrService } from 'ngx-toastr';
import { Carga } from '../carga';

@Component({
  selector: 'app-carga-create',
  templateUrl: './carga-create.component.html',
  styleUrls: ['./carga-create.component.css']
})
export class CargaCreateComponent implements OnInit {

  constructor(
    private cargaService: CargaService,
    private toastrService: ToastrService
  ) { }

  @Input() loginUsuario: string;

  carga: Carga;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new usuario
  */
  @Output() create = new EventEmitter();

  createCarga(): Carga {
    this.cargaService.createCarga(this.loginUsuario, this.carga)
      .subscribe(carga => {
        this.carga = carga;
        this.create.emit(carga);
        this.toastrService.success("La carga fue creada", "Creacion de carga");
      });
      console.log(this.carga);
    return this.carga;
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to create a carga
      */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.carga = new Carga();
  }

}
