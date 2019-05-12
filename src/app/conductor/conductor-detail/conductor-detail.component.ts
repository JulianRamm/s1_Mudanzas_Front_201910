import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { ConductorDetail } from '../conductor-detail';
import { ActivatedRoute } from '@angular/router';
import { Conductor } from '../conductor';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {

  proveedor_login: string;
  conductor_Id: number;
  conductorDetail: ConductorDetail;
  showEdit: boolean;
  hayViaje:boolean;

  constructor(private conductorService: ConductorService,
    private route: ActivatedRoute, ) { }

  private getConductorDetail() {
    this.conductorService.getConductorDetail(this.proveedor_login, this.conductor_Id)
      .subscribe(conductorDetail => {
        this.conductorDetail = conductorDetail;
      });
  }
  
  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }

  ngOnInit() {
    this.conductor_Id = Number.parseInt(this.route.snapshot.params['id']);
    this.proveedor_login = this.route.snapshot.params['login'];
    this.conductorDetail = new ConductorDetail();
    this.getConductorDetail();
  }
}


