import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { ToastrService } from 'ngx-toastr';
import { Conductor } from '../conductor';

@Component({
  selector: 'app-conductor-edit',
  templateUrl: './conductor-edit.component.html',
  styleUrls: ['./conductor-edit.component.css']
})
export class ConductorEditComponent implements OnInit {

  constructor(
    private conductorService: ConductorService,
    private toastrService: ToastrService
  ) { }

  @Input() loginProveedor: string;

  conductor: Conductor;

  /**
    * The output which tells the parent component
    * that the user no longer wants to edit an usuario
    */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user editd a new usuario
  */
  @Output() edit = new EventEmitter();

  editConductor(): Conductor {
    this.conductor.calificacion = 5;
    this.conductorService.updateConductor(this.conductor, this.loginProveedor)
      .subscribe(conductor => {
        this.conductor = conductor;
        this.edit.emit();
        this.toastrService.success("El conductor fue actualizado", "Actualización de conductor");
      });

    return this.conductor;
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to edit a conductor
      */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.conductor = new Conductor();
  }

}
