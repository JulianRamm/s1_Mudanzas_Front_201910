import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loginPage: boolean;

  landingPage: boolean;

  check: boolean;

  constructor(
  ) { }

  ngOnInit() {
    this.landingPage = true;
    this.loginPage = false;
    this.check = false;
  }

  checkear():void {
    this.check = !this.check;
  }

  toggleLogin(): void {
    this.loginPage = !this.loginPage;
    if(this.loginPage) {this.landingPage = false} else {this.landingPage = true}
  }

  toggleLanding(): void {
    this.landingPage = !this.landingPage;
  }

}
