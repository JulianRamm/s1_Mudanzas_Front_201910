import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { ToastrService } from 'ngx-toastr';
import { Agenda } from '../agenda';

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css']
})
export class AgendaCreateComponent implements OnInit {

  constructor(
    private agendaService: AgendaService,
    private toastrService: ToastrService
  ) { }

  @Input() loginUsuario: string;

  agenda: Agenda;

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

  createTarjeta(): Agenda {
      this.agenda.formatoDiaActual()
    this.agenda.formatDateTime();
    this.agendaService.createAgenda(this.loginUsuario, this.agenda)
      .subscribe(agenda => {
        this.agenda = agenda;
        this.create.emit();
        this.toastrService.success("La agenda fue creada", "Creacion de Agenda");
      });
    return this.agenda;
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to create an user
      */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.agenda = new Agenda();
  }

}



