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

    loginPage: boolean;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "moveasy";
        this.landingPage = true;
        this.loginPage =  false;
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    toggleLanding(): void {
        this.landingPage = !this.landingPage;
    }

    toggleLogin(): void {
        this.loginPage = !this.loginPage;
    }

    cerrarPagina(): void {
        this.loginPage = false;
        this.landingPage = false;
    }

    logout(): void {
        this.authService.logout()
    }

}





