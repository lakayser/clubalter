import { CategoriaTorneo } from './categoriaTorneo';
export interface TorneoCrear{
    categoriaTorneo:        CategoriaTorneo[];
    tipoTorneo:             CategoriaParticipante[];
    categoriaParticipantes: CategoriaParticipante[];
    _id:                    string;
    inicioT:                Date;
    lugar:                  string;
    estadoEnCurso:          boolean;
    inicioInscripciones:    Date;
    finInscripciones:       Date;
    categoria?:             string[];
    limiteParejas:          string;
    inscripcionPareja?:     string;
    createdAt:              Date;
    updatedAt:              Date;
    nombreTorneo?:          string;
    detalle?:               string;
    valorInscripcion?:      number;
}

export interface CategoriaParticipante {
    _id:       string;
    name:      string;
    createdAt: Date;
    updatedAt: Date;
}