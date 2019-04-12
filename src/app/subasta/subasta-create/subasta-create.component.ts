import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SubastaService } from '../subasta.service';
import { ToastrService } from 'ngx-toastr';
import { Subasta } from '../subasta';

@Component({
  selector: 'app-subasta-create',
  templateUrl: './subasta-create.component.html',
  styleUrls: ['./subasta-create.component.css']
})
export class SubastaCreateComponent implements OnInit {

  constructor(
    private subastaService: SubastaService,
    private toastrService: ToastrService
  ) { }

  @Input() loginUsuario: string;

  subasta: Subasta;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();


  createSubasta(): Subasta {
    this.subastaService.createSubasta(this.loginUsuario, this.subasta)
      .subscribe(subasta => {
        this.subasta = subasta;
        this.create.emit();
        this.toastrService.success("La subasta fue creada", "Creacion de subasta");
      });
      console.log(this.subasta);
    return this.subasta;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }
  ngOnInit() {
    this.subasta = new Subasta();

  }

}
