import { Component, OnInit, Input } from '@angular/core';
import { CargaService } from '../carga.service';
import { ActivatedRoute } from '@angular/router';
import { Carga } from '../carga';

@Component({
  selector: 'app-carga-list',
  templateUrl: './carga-list.component.html',
  styleUrls: ['./carga-list.component.css']
})
export class CargaListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param CargaService The author's services provider
     */
    constructor(private cargaService: CargaService, private route: ActivatedRoute) {}

    @Input() login: string;

    /**
     * The list of cargas which belong to the BookStore
     */
    cargas: Carga[];

    getCargas(): void {
        this.cargaService.getCargas(this.login)
        .subscribe(cargas => {
            this.cargas = cargas;
        });
    }

    /**
     * This will initialize the component by retrieving the list of cargas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCargas();
    }

}
