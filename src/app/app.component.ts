import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';

import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
  } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * The app component. This component is the base of sXXX_ZZZ-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    landingPage: boolean;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "moveasy";
        this.landingPage = true;
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService, private router: Router) { }

    toggleLanding(): void {
        this.landingPage = !this.landingPage;
    }

    cerrarPagina(): void {
        this.landingPage = false;
    }

    abrirUsuarios(): void {
        this.toggleLanding();
        this.router.navigate(['/usuarios/list']);
    }

    abrirProveedores(): void {
        this.toggleLanding();
        this.router.navigate(['/proveedores/list']);
    }

    logout(): void {
        this.authService.logout()
    }

}





