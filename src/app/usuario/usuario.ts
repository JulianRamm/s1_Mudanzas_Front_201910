/**
 * Esta clase representa a un usuario de moveasy/
 * Contiene toda la informacion relevante para un usuario
 */
export class Usuario {
    /**
     * El id del usuario
     */
    id: number;

    /**
     * El login del usuario
     */
    login: string;

    /**
     * La contrasenia del usuario
     */
    password: string;

    /**
     * El nombre del usuario
     */
    nombre: string;

    /**
     * El apellido del usuario
     */
    apellido: string;

    /**
     * El correo electronico del usuario
     */
    correoElectronico: string;

    /**
     * La ciudad de origen del usuario
     */
    ciudadDeOrigen: string;
}