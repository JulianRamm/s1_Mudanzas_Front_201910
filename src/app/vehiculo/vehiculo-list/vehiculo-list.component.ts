/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component ({
    selector: 'app-vehiculo',
    templateUrl: './vehiculo-list.component.html',
    styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param usuarioService The author's services provider
     */
    constructor(private vehiculoService: VehiculoService) {}

    /**
     * The list of usuarios which belong to the BookStore
     */
    vehiculos: Vehiculo[];

    /**
     * Asks the service to update the list of usuarios
     */
    getUsuarios(): void {
        this.vehiculoService.getVehiculos()
            .subscribe(vehiculos => this.vehiculos = vehiculos);
    }

    /**
     * This will initialize the component by retrieving the list of usuarios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getUsuarios();
    }
}

