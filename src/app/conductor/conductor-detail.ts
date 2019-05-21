import { Conductor } from './conductor';
import { ViajeDetail } from '../viaje/viaje-detail';
import { VehiculoDetail } from '../vehiculo/vehiculo-detail';

/**
* This class represents a usuario of the moveasy. 
* It contains all the information relevant to the user.
*/
export class ConductorDetail extends Conductor {

   vehiculos:VehiculoDetail[];

}