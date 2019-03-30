import { Usuario } from './usuario';
import { Tarjeta } from '../tarjeta/tarjeta';

/**
* This class represents a usuario of the moveasy. 
* It contains all the information relevant to the user.
*/
export class UsuarioDetail extends Usuario {

    tarjetas: Tarjeta[];

}