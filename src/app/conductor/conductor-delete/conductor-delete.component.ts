import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-conductor-delete',
    templateUrl: './conductor-delete.component.html',
    styleUrls: ['./conductor-delete.component.css']
})
export class ConductorDeleteComponent implements OnInit {

    constructor(private conductorService: ConductorService, private route: ActivatedRoute) { }
    @Input() idconductor: number;
    @Input() loginP: string;
    @Output() notifyDelete: EventEmitter<any> = new EventEmitter();

    confirmDelete: boolean = false;

    deleteConductor(): void {
        this.conductorService.deleteConductor(this.loginP, this.idconductor
        ).
            subscribe(() =>
                console.log(`conductor
 con id = ${this.idconductor
                    } eliminado`),
                (err) => console.log(err)
            );
        this.notifyDelete.emit(this.idconductor
        );
    }
    ngOnInit() {
    }

}
