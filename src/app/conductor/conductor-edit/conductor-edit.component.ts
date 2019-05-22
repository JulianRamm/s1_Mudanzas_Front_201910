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

  /**
  * The output which tells the parent component
  * that the user updated a new usuario
  */
  @Output() update = new EventEmitter();

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

  editConductor(): void {
    this.conductorService.updateConductor(this.conductor, this.loginProveedor)
      .subscribe(() => {
        this.toastrService.success("The usuario's information was updated", "Usuario edition");
      });
    this.update.emit();
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
