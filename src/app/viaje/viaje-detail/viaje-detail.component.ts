import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ViajeService } from '../viaje.service';
import { ViajeDetail } from '../viaje-detail';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {

  @Input() loginP: string;
  @Input() conductorId: number;
  @Input() viajeId: number;
  showEdit: boolean;

  viajeDetail: ViajeDetail;

  constructor(
    private service: ViajeService,
    private route: ActivatedRoute,
    private router: Router) { }

  getViajeDetail(): void {
    this.service.getViajeDetail(this.loginP, this.conductorId, this.viajeId).subscribe(viaje=>{this.viajeDetail=viaje});
  }
  showHideEdit(): void {
    this.showEdit = !this.showEdit;
  }

  ngOnInit() {
    this.viajeId = Number.parseInt(this.route.snapshot.paramMap.get('viajeId'));
    this.showEdit = false;
    this.viajeDetail=new ViajeDetail();
    this.getViajeDetail;
  }

}
