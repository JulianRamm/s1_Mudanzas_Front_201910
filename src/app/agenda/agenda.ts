export class Agenda{
    
    id: number;
    
    horaInicio:any;
    
    horaFin:any;
    
    disponibilidad: boolean;
    
    diaActual: any;
    
    formatoDiaActual(): void {
        this.diaActual = Date.now();
    }
    
    formatDateTime(): void {
        let primero = this.horaInicio.split('/');
        this.horaInicio = "20"+ primero[1] + "-" + primero[0] + "-02T00:00:00-00:01";
        let segundo = this.horaFin.split('/');
        this.horaFin = "20"+ segundo[1] + "-" + segundo[0] + "-02T00:00:00-00:01";
    }
    
    
}


