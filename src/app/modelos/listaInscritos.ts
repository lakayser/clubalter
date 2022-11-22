import { Usuario } from "./usuario";
import { TorneoCrear } from './TorneoCrear';
import { Organization } from './organization';

export interface ListaInscrito{
    paerticipantes: Usuario[],
    pago: boolean,
    estado: boolean,
    torneo: TorneoCrear[],
    organization: Organization[]
}