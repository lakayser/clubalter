import { reduce } from "d3";

export interface Inscritos {
  _id:           string;
  participantes: Participante[];
  estado:        boolean;
  torneo:        Torneo[];
  organization:  Organization[];
  createdAt:     Date;
  updatedAt:     Date;
  nombreEquipo?: string;
  pago?:         boolean;
  sets:          string[];
}

export interface Organization {
  _id:       ID;
  name:      Name;
  estado:    boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum ID {
  The623C92C697790A694Cdc6959 = "623c92c697790a694cdc6959",
}

export enum Name {
  CanchasElBicho = "canchas el bicho",
}

export interface Participante {
  _id:          string;
  nameUser:     string;
  password:     string;
  organization: string[];
  ocupation:    string[];
  telefono:     string;
  direccion?:   string;
  email:        string;
  rut:          string;
  roles:        string[];
  service:      any[];
  createdAt:    Date;
  updatedAt:    Date;
  estado?:      boolean;
}

export interface Torneo {
  _id:                    PurpleID;
  nombreTorneo:           NombreTorneo;
  inicioT:                Date | null;
  lugar:                  Lugar;
  estadoEnCurso:          boolean;
  inicioInscripciones:    Date | null;
  finInscripciones:       Date | null;
  categoriaTorneo:        CategoriaTorneo[];
  limiteParejas:          string;
  detalle:                Detalle;
  tipoTorneo:             TipoTorneo[];
  valorInscripcion:       number;
  categoriaParticipantes: CategoriaParticipante[];
  organization:           ID[];
  inscripciones:          any[];
  createdAt:              Date;
  updatedAt:              Date;
}

export enum PurpleID {
  The6376832B2Ca293Dec5E46D64 = "6376832b2ca293dec5e46d64",
  The6398A43401035Ef123Dc12AE = "6398a43401035ef123dc12ae",
  The6398A45D01035Ef123Dc12D4 = "6398a45d01035ef123dc12d4",
  The639B38C0C1056B9D7930F691 = "639b38c0c1056b9d7930f691",
  The63A1Bd371Aeebe248D51A40D = "63a1bd371aeebe248d51a40d",
}

export enum CategoriaParticipante {
  The6356E76Bbdcf6Ed95Dcf8050 = "6356e76bbdcf6ed95dcf8050",
  The635A9D04B014E64Cdb056661 = "635a9d04b014e64cdb056661",
}

export enum CategoriaTorneo {
  The635A9D75B014E64Cdb056664 = "635a9d75b014e64cdb056664",
  The635A9D7Ab014E64Cdb056667 = "635a9d7ab014e64cdb056667",
  The635A9D80B014E64Cdb05666A = "635a9d80b014e64cdb05666a",
}

export enum Detalle {
  A = "a",
  Empty = "",
  Kjkj = "kjkj",
  LaInscripciónDebeSerRealizadaPorElCapitánDeLaPareja = "La inscripción debe ser realizada por el capitán de la pareja",
  TraerAgua = "traer agua",
}

export enum Lugar {
  A = "a",
  Chanchas2 = "chanchas 2",
  Empty = "",
  EnLasCanchasDeSANCarlos = "en las canchas de san carlos",
  Kjjk = "kjjk",
}

export enum NombreTorneo {
  ProbandoLaAPI = "probando la api",
  Torneo1 = "torneo1",
  TorneoDeEliminaciónDirecta = "Torneo de eliminación directa",
  TorneoExpress = "Torneo express",
}

export enum TipoTorneo {
  The6352F13Aba12Bf29B9D1F315 = "6352f13aba12bf29b9d1f315",
}
