import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TarjetaService } from '../tarjeta.service';
import { ToastrService } from 'ngx-toastr';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-tarjeta-create',
  templateUrl: './tarjeta-create.component.html',
  styleUrls: ['./tarjeta-create.component.css']
})
export class TarjetaCreateComponent implements OnInit {

  constructor(
    private tarjetaService: TarjetaService,
    private toastrService: ToastrService
  ) { }

  @Input() loginUsuario: string;

  tarjeta: Tarjeta;

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

  createTarjeta(): Tarjeta {
    this.tarjeta.formatDate();
    this.tarjetaService.createTarjeta(this.loginUsuario, this.tarjeta)
      .subscribe(tarjeta => {
        this.tarjeta = tarjeta;
        this.create.emit();
        this.toastrService.success("La tarjeta fue creada", "Creacion de Tarjeta");
      });
      console.log(this.tarjeta);
    return this.tarjeta;
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to create an user
      */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.tarjeta = new Tarjeta();
  }

}
