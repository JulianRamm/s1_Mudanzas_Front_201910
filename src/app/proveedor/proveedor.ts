/**
 * Esta clase representa a un proveedor de moveasy/
 * Contiene toda la informacion relevante para un proveedor
 */
export class Proveedor {

    /**
     * El id del proveedor
     */
    id: number;

    /**
     * La contrasenia del proveedor
     */
    password: string;


    /**
     * El login del proveedor
     */
    login: string;

    /**
     * El nombre del proveedor
     */
    nombre: string;

    /**
     * El logotipo del proveedor
     */
    logotipo: string;

    /**
     * La ciudad de origen del proveedor
     */
    ciudadDeOrigen: string;

    /**
     * El correo electronico del proveedor
     */
    correoElectronico: string;

    /**
     * El telefono del proveedor
     */
    telefono: string;

    /**
     * El numero de vehiculos del proveedor
     */
    numeroVehiculos: number;

    /**
     * El dinero disponible del proveedor
     */
    dineroDisponible: number;

    /**
     * La calificacion del proveedor
     */
    calificacion: number;
}