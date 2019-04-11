import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  subastaSeleccionada: Subasta;
  @Output() selectedSubasta: EventEmitter<Subasta> = new EventEmitter<Subasta>();

  @Output() showOferta: EventEmitter<any> = new EventEmitter();


  idSubasta: number;

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
    this.getSubastas();
  }
}

