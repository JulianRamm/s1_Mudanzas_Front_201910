/**
 * Esta clase representa a una tarjeta de un usuario de moveasy/
 * Contiene toda la informacion relevante de una tarjeta de un usuario.
 */
export class Tarjeta {

    /**
     * El id de la tarjeta
     */
    id: number;

    /**
     * El nombre del propietario de la tarjeta
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

    formatDate(): void {
        let primero = this.fechaVencimiento.split('/');
        this.fechaVencimiento = "20"+ primero[1] + "-" + primero[0] + "-02T00:00:00-00:01";
    }

}