import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
//import { ProveedorDetail } from '../proveedor-detail';

@Component({
    selector: 'app-proveedor',
    templateUrl: './proveedor-list.component.html',
    styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

    proveedor_login: string;
    selectedProveedor: Proveedor;

    /**
     * Constructor for the component
     * @param proveedorService The author's services provider
     */
    constructor(private proveedorService: ProveedorService) { }

    /**
    * Shows or hides the proveedor-create-component
    */
    showCreate: boolean;

    /**
     * The list of proveedores which belong to the BookStore
     */
    proveedores: Proveedor[];

    onSelected(login: string): void {
        this.showCreate = false;
        this.proveedor_login = login;
        //this.selectedProveedor = new ProveedorDetail();
        //this.getProveedorDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedProveedor) {
            this.selectedProveedor = undefined;
            this.proveedor_login
     = undefined;
        }
        this.showCreate = !this.showCreate;
    }
/* 
    getProveedorDetail(): void {
        this.proveedorService.getProveedorDetail(this.proveedor_login
    )
            .subscribe(selectedProveedor => {
                this.selectedProveedor = selectedProveedor;
            });
    }
*/
    /**
     * Asks the service to update the list of proveedores
     */
    getProveedores(): void {
        this.proveedorService.getProveedors()
            .subscribe(proveedores => this.proveedores = proveedores);
    }

    /**
     * This will initialize the component by retrieving the list of proveedores from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.selectedProveedor = undefined;
        this.proveedor_login
 = undefined;
        this.getProveedores();
    }
}