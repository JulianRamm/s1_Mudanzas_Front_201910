import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { TarjetaService } from '../tarjeta.service';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {

  constructor(
    private tarjetaService: TarjetaService
    ) { }

  tarjetas: Tarjeta[];

  getTarjetas(): void {
    this.tarjetaService.getTarjetas()
        .subscribe(tarjetas => {
          this.tarjetas = tarjetas;
        });
        console.log(this.tarjetas);
  }

  ngOnInit() {
    this.getTarjetas;
  }

}
