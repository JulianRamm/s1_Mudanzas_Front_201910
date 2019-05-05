import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loginPage: boolean;

  landingPage: boolean;

  @Output() usuarios: EventEmitter<any> = new EventEmitter();

  @Output() proveedores: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.landingPage = true;
    this.loginPage = false;
  }

  toggleLogin(): void {
    this.loginPage = !this.loginPage;
    if(this.loginPage) {this.landingPage = false} else {this.landingPage = true}
  }

  toggleLanding(): void {
    this.landingPage = !this.landingPage;
  }

  abrirUsuarios(): void {
    this.usuarios.emit();
  }

  abrirProveedores(): void {
    this.proveedores.emit();
  }

}
