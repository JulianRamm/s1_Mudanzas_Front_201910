/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 /**
 * Esta clase representa a un vehiculo de moveasy/
 * Contiene toda la informacion relevante para un vehiculo
 */
export class Vehiculo{
    /**
     * el id del vehiculo
     */
    id: number;
    /**
     * el id del conductor que esta actualmente manejando el vehiculo
     */
    idConductorActual: number;
    /**
     * El numero de conductores que conducen este vehiculo.
     */
    numeroConductores: number;
    /**
     * la marca del vehiculo
     */
    marca: string;
    /**
     * la placa del vehiculo
     */
    placa: string;
    /**
     * el color del vehiculo
     */
    color: string;
    /**
     * la imagen del vehiculo
     */
    imagen:string;
    /**
     * las dimensiones del vehiculo.
     */
    dimensiones: string;
    /**
     * el rendimiento del vehiculo
     */
    rendimiento: number;
}

