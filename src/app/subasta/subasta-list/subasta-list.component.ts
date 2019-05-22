import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subasta } from '../subasta';
import { SubastaService } from '../subasta.service';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../oferta/oferta.service';
import { Oferta } from '../../oferta/oferta';

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
  constructor(private subastaService: SubastaService, private route: ActivatedRoute, private ofertaService: OfertaService) { }

  @Input() login: string;
  @Input() todo: boolean;

  subastaSeleccionada: Subasta;
  @Output() selectedSubasta: EventEmitter<Subasta> = new EventEmitter<Subasta>();

  @Output() showOferta: EventEmitter<any> = new EventEmitter();


  idSubasta: number;

  showCreate: boolean;


  /**
   * The list of subastas which belong to the moveassy
   */
  subastas: Subasta[];

  getAllSubastas(): void {
    this.subastaService.getAllSubastas()
    .subscribe(subastas => {
      this.subastas = subastas;
    });
  }
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

  crearOferta(idSubasta: number): void
  {
    let valor = prompt("Ingrese el valor por el cual va a generar la oferta: ", "2200000");
    let comentario = prompt("Ingrese un comentario para su oferta: ", "Brindaré el mejor servicio!");
    let dummy = new Oferta();
    dummy.id = 1;
    dummy.comentario = comentario;
    dummy.valor = parseInt(valor);
    dummy.subasta = {};
    dummy.subasta.id = idSubasta;
    console.log(dummy);
    this.ofertaService.createOfertaProveedor(this.login, dummy);
  }

  onSelectedClick(idSubasta: number): void {
    if (this.subastaSeleccionada) {
      this.subastaSeleccionada = null;
    }
    this.idSubasta = idSubasta;
    this.getSubasta();
    this.showOferta.emit();
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
  }


  getSubasta(): void {
    this.subastaService.getSubastaDetail(this.idSubasta, this.login).subscribe(s => {
      this.subastaSeleccionada = s;
      this.selectedSubasta.emit(this.subastaSeleccionada)
    })
  }
  /**
   * This will initialize the component by retrieving the list of tarjetas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
    this.subastaSeleccionada = new Subasta();
    if(this.login !=null && !this.todo)
    this.getSubastas();
    else{
      this.getAllSubastas();

    }
  }
}

