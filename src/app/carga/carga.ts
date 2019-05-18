import { Viaje } from "../viaje/viaje";
import { Usuario } from "../usuario/usuario";

export class Carga{
    id:number;
    datosEnvio:string;
    volumen:number;
    lugarSalida: string;
    lugarLlegada: string;
    fechaEstimadaLlegada:any;
    fechaEnvio:any;
    observaciones:string;
    viaje:Viaje;
    usuario:Usuario;
}