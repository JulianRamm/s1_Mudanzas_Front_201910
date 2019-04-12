import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { ProveedorService } from '../proveedor.service';
import { ProveedorDetail } from '../proveedor-detail';
import { Vehiculo } from '../../vehiculo/vehiculo';




@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {

  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
  ) { }

  /**
    * The proveedor's login retrieved from the path
    */
  proveedor_login: string;

  /**
  * The proveedor whose details are shown
  */
  proveedorDetail: ProveedorDetail;

  showEdit: boolean;

  selectedVehiculo: Vehiculo;

  /**
  * The method which retrieves the details of the proveedor that
  * we want to show
  */
  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_login)
      .subscribe(proveedorDetail => {
        this.proveedorDetail = proveedorDetail;
        console.log(this.proveedorDetail)
      });
  }

  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }

  setVehiculo(v: Vehiculo)
  {
    this.selectedVehiculo = v;
  }


  /**
  * The method which initilizes the component
  * We need to initialize the proveedor and its tarjetas so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.proveedor_login = this.route.snapshot.paramMap.get('login');
    this.proveedorDetail = new ProveedorDetail();
    this.getProveedorDetail();
  }

}
