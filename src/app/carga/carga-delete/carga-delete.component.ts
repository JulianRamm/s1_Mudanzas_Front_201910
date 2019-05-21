import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CargaService } from '../carga.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carga-delete',
  templateUrl: './carga-delete.component.html',
  styleUrls: ['./carga-delete.component.css']
})
export class CargaDeleteComponent implements OnInit {

  constructor(private cargaService: CargaService, private route: ActivatedRoute) { }
  @Input() idCarga: number;
  @Input() login: string;
  @Output() notifyDelete: EventEmitter<any> = new EventEmitter();

  confirmDelete: boolean = false;

  deleteCarga(): void {
    this.cargaService.deleteCarga(this.login, this.idCarga).
      subscribe(() =>
        console.log(`Carga con id = ${this.idCarga} eliminado`),
        (err) => console.log(err)
      );
      this.notifyDelete.emit(this.idCarga);
  }
  ngOnInit() {
  }

}
