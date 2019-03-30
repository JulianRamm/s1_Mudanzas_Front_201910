import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { TarjetaService } from '../tarjeta.service';

@Component({
  selector: 'app-tarjeta-list',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService) { }

  tarjetas: Tarjeta[];

  getTarjetas(): void {

    this.tarjetaService.getTarjetas()
        .subscribe(tarjetas => {
          this.tarjetas = tarjetas;
        });

  }

  ngOnInit() {
    this.getTarjetas;
  }

}
