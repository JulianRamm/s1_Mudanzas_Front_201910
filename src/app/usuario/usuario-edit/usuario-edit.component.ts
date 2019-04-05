import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private toastrService: ToastrService
  ) { }

  @Input() usuario: UsuarioDetail;

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
   editUsuario(): void {
    this.usuarioService.updateUsuario(this.usuario)
        .subscribe(() => {
            this.toastrService.success("The usuario's information was updated", "Usuario edition");
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
