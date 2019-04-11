import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {
 /**
     * Constructor for the component
     * @param subastaService The author's services provider
     */
    constructor(private ofertaService: OfertaService, private route: ActivatedRoute) { }

    @Input() id: number;

    @Output() cerrar :EventEmitter<any> = new EventEmitter();

    ofertas : Oferta[];
    showCreate: boolean;

    /**
     * The list of subastas which belong to the moveassy
     */

    getOfertas(): void {
        this.ofertaService.getOfertas(this.id)
            .subscribe(ofertas => {
                this.ofertas = ofertas;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    cerrarOferta(): void {
        
        this.cerrar.emit();
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      }

    /**
     * This will initialize the component by retrieving the list of tarjetas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.getOfertas();
    }
}

