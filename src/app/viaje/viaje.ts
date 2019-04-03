export class Viaje {
    id: number;
    lugarSalida: string;
    lugarLlegada: string;
    tiempo: number;
    gastoGasolina: number;
    clima: string;
    horaPartida: Date;
    horaLlegada: Date;

    constructor(id: number, lugarsalida: string, lugarLlegada: string, tiempo: number, gastoGasolina: number, clima: string, horaPartida: Date, horaLlegada: Date) {
        this.id = id;
        this.lugarSalida = lugarsalida;
        this.lugarLlegada = lugarLlegada;
        this.tiempo = tiempo;
        this.gastoGasolina = gastoGasolina;
        this.clima = clima;
        this.horaPartida = horaPartida;
        this.horaLlegada = horaLlegada;
    }
}