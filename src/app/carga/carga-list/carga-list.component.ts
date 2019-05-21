import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CargaService } from '../carga.service';
import { ActivatedRoute } from '@angular/router';
import { Carga } from '../carga';
import { splitClasses } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carga',
  templateUrl: './carga-list.component.html',
  styleUrls: ['./carga-list.component.css']
})
export class CargaListComponent implements OnInit {

  @Output() selectedCarga: EventEmitter<Carga> = new EventEmitter<Carga>();
  cargaSeleccionada: Carga;

  @Output() showMap: EventEmitter<any> = new EventEmitter();

  idCarga: number;

  showCreate: boolean;
  selectedImage: File = null;
  defaultImage: string = "../../assets/defaultImage.jpg";
  /**
     * Constructor for the component
     * @param CargaService The author's services provider
     */
  constructor(private cargaService: CargaService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  @Input() login: string;

  /**
   * The list of cargas 
   */
  cargas: Carga[];

  getCargas(): void {
    this.cargaService.getCargas(this.login)
      .subscribe(cargas => {
        this.cargas = cargas;
        cargas.forEach((carga) => {
          if (carga.imagenes) {
            var baina = "data:image/jpeg;base64,";
            var str = carga.imagenes.substring(20, carga.imagenes.lenght);
            carga.imagenes = baina + str;
          }
        })
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
    if (this.cargaSeleccionada) {
      this.cargaSeleccionada = null;
    }
    this.idCarga = idCarga;
    this.getCarga();
    this.showMap.emit();
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  }

  getCarga(): void {
    this.cargaService.getCargaDetail(this.idCarga, this.login)
      .subscribe(seleccionado => {
        this.cargaSeleccionada = seleccionado;
        this.selectedCarga.emit(this.cargaSeleccionada);
      });
  }

  cargaEliminada(idCarga: number): void {
    let c = this.cargas.find(function (element) { return element.id === idCarga });
    this.cargas.splice(this.cargas.indexOf(c), 1);
  }
  buscarCarga() {
    if (this.idCarga == undefined) {
      this.ngOnInit();
    }
    this.cargas = this.cargas.filter((element) => { return element.id.toLocaleString().match(this.idCarga.toLocaleString()) });
  }

  readImage(carga: Carga) {
    var base64data;
    var reader = new FileReader();
    var san = this.sanitizer;
    reader.onloadend = function () {
      base64data = reader.result;
      console.log(base64data);
      carga.imagenes = base64data;
    }
    reader.readAsDataURL(<Blob>carga.imagenes);
    console.log(carga.imagenes);
  }
  onSelectedFile(event, id) {
    var file = <File>event.target.files[0];
    var found = this.cargas.find((el) => el.id === id);
    var reader = new FileReader();
    reader.onload = (ev: any) => {
      found.imagenes = ev.target.result;
      console.log(found.imagenes);
      this.cargaService.upddateCarga(this.login, id, found).subscribe((carga) => {
      })
    }
    reader.readAsDataURL(file);
  }
  /**
   * This will initialize the component by retrieving the list of cargas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
    this.cargaSeleccionada = new Carga();
    this.getCargas();
  }

}
