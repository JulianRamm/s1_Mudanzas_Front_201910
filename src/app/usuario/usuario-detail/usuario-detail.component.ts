import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';
import { Tarjeta } from '../../tarjeta/tarjeta';
@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit, OnDestroy {

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //This is added so we can refresh the view when one of the usuarios in
    //the "Other usuarios" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  /**
    * The usuario's id retrieved from the path
    */
  usuario_login: string;

  /**
  * The usuario whose details are shown
  */
  usuarioDetail: UsuarioDetail;

  /**
  * The other usuarios shown in the sidebar
  */
  other_usuarios: Usuario[];

  /**
  * The suscription which helps to know when a new usuario
  * needs to be loaded
  */
  navigationSubscription;

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

  /**
  * This method retrieves all the usuarios in the Usuariostore to show them in the list
  */
  getOtherUsuarios(): void {
    this.usuarioService.getUsuarios()
      .subscribe(usuarios => {
        this.other_usuarios = usuarios;
        this.other_usuarios = this.other_usuarios.filter(usuario => usuario.login !== this.usuario_login);
      });
  }

  /**
  * The method which initilizes the component
  * We need to initialize the usuario and its tarjetas so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.usuario_login = + this.route.snapshot.paramMap.get('login');
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
    this.getOtherUsuarios();
  }

  /**
  * This method helps to refresh the view when we need to load another usuario into it
  * when one of the other usuarios in the list is clicked
  */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
