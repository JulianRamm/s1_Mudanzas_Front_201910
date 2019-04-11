import { Proveedor } from './proveedor';
import { Conductor } from '../conductor/conductor';
/**
* This class represents a proveedor of the moveasy. 
* It contains all the information relevant to the user.
*/
export class ProveedorDetail extends Proveedor {

    conductores: Conductor[];

}