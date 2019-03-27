import { Usuario } from './usuario';
import { Tarjeta } from './tarjeta';

/**
 * Esta clase representa UsuarioDetail de moveasy.
 * Contiene toda la informacion relevante para el usuario.
 */
export class UsuarioDetail extends Usuario {

    /**
     * Las tarjetas del usuario.
     */
    tarjetas: Tarjeta[];
}
