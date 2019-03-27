import { Usuario } from '../usuario/usuario';
/**
 * Esta clase representa a una tarjeta de un usuario de moveasy
 * Contiene toda la informacion relevante para un usuario de una tarjeta
 */
export class Tarjeta {

    /**
     * El id de la tarjeta
     */
    id: number;

    /**
     * El nombre personalizado de la tarjeta
     */
    nombreTarjeta: string;

    /**
     * El numero serial de la tarjeta
     */
    numeroSerial: string;

    /**
     * El codigo de seguridad de la tarjeta
     */
    codigoSeguridad: number;

    /**
     * La fecha de vencimiento de la tarjeta
     */
    fechaVencimiento: any;

    /**
     * El usuario de la tarjeta
     */
    usuario: Usuario;

}