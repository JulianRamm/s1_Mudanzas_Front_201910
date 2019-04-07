import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CargaService } from '../carga.service';
import { ActivatedRoute } from '@angular/router';
import { Carga } from '../carga';

@Component({
  selector: 'app-carga',
  templateUrl: './carga-list.component.html',
  styleUrls: ['./carga-list.component.css']
})
export class CargaListComponent implements OnInit {

  @Output() selectedCarga:  EventEmitter<Carga> = new EventEmitter();
  
  @Output() showMap = new EventEmitter<boolean>();
  showMapActual: boolean;

  idCarga: number;

  showCreate: boolean;
  /**
     * Constructor for the component
     * @param CargaService The author's services provider
     */
  constructor(private cargaService: CargaService, private route: ActivatedRoute) { }

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
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  convertirFechaChevere(fecha): string {
    let fechaC = fecha.split("-", 3);
    let anio = fechaC[0];
    let mes = fechaC[1];
    let s = fechaC[2].split("T", 2);
    let dia = s[0];
    let h = s[1].split(":", 2);
    let hora = h[0];
    let min = h[1];
    return dia + "/" + mes + "/" + anio + " " + hora + ":" + min;
  }

  onSelectedClick(idCarga: number): void {
    if(this.selectedCarga) {
      this.selectedCarga = null;
    }
    this.idCarga = idCarga;
    this.getCarga();
    this.showMapActual = !this.showMapActual;
    this.showMap.emit(this.showMapActual);
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  }

  getCarga(): void {
    this.cargaService.getCargaDetail(this.idCarga, this.login)
    .subscribe(seleccionado => {
      console.log(seleccionado);
      this.selectedCarga.emit(seleccionado);
    });
  }

  /**
   * This will initialize the component by retrieving the list of cargas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
    this.showMapActual = false;
    this.showMap.emit(this.showMapActual);
    this.getCargas();

  }

}
