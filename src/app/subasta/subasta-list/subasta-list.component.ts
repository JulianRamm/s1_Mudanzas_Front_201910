import { Component, OnInit, Input } from '@angular/core';
import { Subasta } from '../subasta';
import { SubastaService } from '../subasta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta-list.component.html',
  styleUrls: ['./subasta-list.component.css']
})
export class SubastaListComponent implements OnInit {
 /**
     * Constructor for the component
     * @param subastaService The author's services provider
     */
    constructor(private subastaService: SubastaService, private route: ActivatedRoute) { }

    @Input() login: string;

    showCreate: boolean;

    /**
     * The list of subastas which belong to the moveassy
     */
    subastas: Subasta[];

    getSubastas(): void {
        this.subastaService.getSubastas(this.login)
            .subscribe(subastas => {
                this.subastas = subastas;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    /**
     * This will initialize the component by retrieving the list of tarjetas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.getSubastas();
    }
}

