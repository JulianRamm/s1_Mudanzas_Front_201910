import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { ToastrService } from 'ngx-toastr';
import { Conductor } from '../conductor';

@Component({
  selector: 'app-conductor-create',
  templateUrl: './conductor-create.component.html',
  styleUrls: ['./conductor-create.component.css']
})
export class ConductorCreateComponent implements OnInit {

  constructor(
    private conductorService: ConductorService,
    private toastrService: ToastrService
  ) { }

  @Input() loginProveedor: string;

  conductor: Conductor;

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

  createConductor(): Conductor {
    this.conductor.calificacion = 5;
    this.conductor.id = 0;

    this.conductorService.createConductor( this.conductor ,this.loginProveedor)
      .subscribe(conductor => {
        this.conductor = conductor;
        this.create.emit();
        this.toastrService.success("La conductor fue creada", "Creacion de conductor");
      });
    return this.conductor;
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to create a conductor
      */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.conductor = new Conductor();
  }

}
