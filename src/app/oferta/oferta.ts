/**
 * Esta clase representa a una oferta de moveasy/
 * Contiene toda la informacion relevante para una oferta
 */
export class Oferta {

    /**
     * El id de la oferta
     */
    id: number;

    
    /**
     * El valor de la oferta
     */
    valor: number;

     /**
     * El comentario de la oferta
     */
    comentario: String;

    /**
     * Una subasta con solo un id
     */
    subasta: {
        id: number
    }

}