import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Conductor } from '../conductor';
import { ConductorService } from '../conductor.service';
//import { ConductorDetail } from '../conductor-detail';

@Component({
    selector: 'app-conductor',
    templateUrl: './conductor-list.component.html',
    styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit {

    @Input()proveedor_login: string;
    @Input()conductor_login: string;
    selectedConductor: Conductor;

    /**
     * Constructor for the component
     * @param conductorService The author's services provider
     */
    constructor(private conductorService: ConductorService) { }

    /**
    * Shows or hides the conductor-create-component
    */
    showCreate: boolean;

    /**
     * The list of conductores which belong to the BookStore
     */
    conductores: Conductor[];

    onSelected(login: string): void {
        this.showCreate = false;
        this.conductor_login = login;
        //this.selectedConductor = new ConductorDetail();
        //this.getConductorDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedConductor) {
            this.selectedConductor = undefined;
            this.conductor_login= undefined;
        }
        this.showCreate = !this.showCreate;
    }
 
    /*getConductorDetail(): void {
        this.conductorService.getConductorDetail(this.conductor_login
    )
            .subscribe(selectedConductor => {
                this.selectedConductor = selectedConductor;
            });
    }*/

    /**
     * Asks the service to update the list of conductores
     */
    getConductores(): void {
        console.log(this.conductor_login)
        this.conductorService.getConductores(this.conductor_login)
            .subscribe(conductores => this.conductores = conductores);
    }

    /**
     * This will initialize the component by retrieving the list of conductores from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.selectedConductor = undefined;
        this.getConductores();
    }
}