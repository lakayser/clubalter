export interface Inscritos {
  _id: string;
  nombreEquipo: string;
  participantes: Participante[];
  nombreJugador1: string;
  nombreJugador2: string;
  pago: boolean;
  estado: boolean;
  torneo: Torneo[];
  set1: number | null;
  set2: number | null;
  set3: number | null;
  setGanado: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Participante {
  service: string[];
  _id: string;
  nameUser: string;
  password: string;
  organization: string[];
  ocupation: string[];
  telefono: string;
  direccion: string;
  payment?: number;
  email: string;
  rut: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
  estado?: boolean;
}

export interface Torneo {
  _id: string;
  nombreTorneo: string;
  inicioT: Date;
  lugar: string;
  estadoEnCurso: boolean;
  inicioInscripciones: Date;
  finInscripciones: Date;
  categoriaTorneo: string[];
  limiteParejas: string;
  detalle: string;
  tipoTorneo: string[];
  valorInscripcion: number;
  categoriaParticipantes: string[];
  organization: string[];
  inscripciones: any[];
  createdAt: Date;
  updatedAt: Date;
}

