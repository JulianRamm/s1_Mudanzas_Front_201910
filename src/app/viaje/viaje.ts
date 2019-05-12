import { Conductor } from "../conductor/conductor";
export class Viaje {
    id: number;
    conductor: Conductor;
    lugarSalida: string;
    lugarLlegada: string;
    tiempo: number;
    gastoGasolina: number;
    clima: string;
    horaPartida: any;
    horaLlegada: any;
}