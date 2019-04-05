import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaListComponent } from './carga-list/carga-list.component';
import { CargaService } from './carga.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CargaListComponent],
  providers: [CargaService]
})
export class CargaModule { }
