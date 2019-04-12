/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Vehiculo } from './vehiculo';
import { Agenda } from '../agenda/agenda';

/**
* This class represents a usuario of the moveasy. 
* It contains all the information relevant to the user.
*/
export class VehiculoDetail extends Vehiculo {

    agenda: Agenda;
}

