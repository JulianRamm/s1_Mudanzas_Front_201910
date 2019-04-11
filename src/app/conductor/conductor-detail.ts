import { Conductor } from './conductor';
import { ViajeDetail } from '../viaje/viaje-detail';

/**
* This class represents a usuario of the moveasy. 
* It contains all the information relevant to the user.
*/
export class ConductorDetail extends Conductor {

    viaje: ViajeDetail;

}