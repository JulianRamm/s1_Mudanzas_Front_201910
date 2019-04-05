import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';
import { TarjetaService } from '../../tarjeta/tarjeta.service';
@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private tarjetaService: TarjetaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
    * The usuario's login retrieved from the path
    */
  usuario_login: string;

  /**
  * The usuario whose details are shown
  */
  usuarioDetail: UsuarioDetail;

  showEdit: boolean;

  /**
  * The method which retrieves the details of the usuario that
  * we want to show
  */
  getUsuarioDetail(): void {
    this.usuarioService.getUsuarioDetail(this.usuario_login)
      .subscribe(usuarioDetail => {
        this.usuarioDetail = usuarioDetail;
      });
  }

  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }

  /**
  * The method which initilizes the component
  * We need to initialize the usuario and its tarjetas so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.usuario_login = this.route.snapshot.paramMap.get('login');
    this.showEdit = false;
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }

}
