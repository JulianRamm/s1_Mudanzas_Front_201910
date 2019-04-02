
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { TarjetaService } from '../tarjeta.service';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component ({
    selector: 'app-tarjeta',
    templateUrl: './tarjeta-list.component.html',
    styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param tarjetaoService The author's services provider
     */
    constructor(private tarjetaService: TarjetaService) {}

    /**
     * The list of tarjetas which belong to the BookStore
     */
    tarjetas: Tarjeta[];

    /**
     * Asks the service to update the list of tarjetas
     */
    getTarjetas(): void {
        this.tarjetaService.getTarjetas()
            .subscribe(tarjeta => this.tarjetas = tarjeta);
    }

    /**
     * This will initialize the component by retrieving the list of tarjetas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getTarjetas();
    }
}
