export interface HorasSemana {
  _id:            string;
  fecha:          Date;
  horario:        string;
  disponibilidad: boolean;
  cancha:         Cancha[];
  precio:         number;
  dia:            Dia;
  semana:         number;
  createdAt:      Date;
  updatedAt:      Date;
}

export interface Cancha {
  _id:            ID;
  name:           Name;
  disponibilidad: boolean;
  organization:   Organization[];
  rangoHorario:   number;
  estado:         boolean;
  createdAt:      Date;
  updatedAt:      Date;
}

export enum ID {
  The62573Cb3A51E0Babfb0E83Ef = "62573cb3a51e0babfb0e83ef",
}

export enum Name {
  Cancha1 = "Cancha 1",
}

export enum Organization {
  The623C92C697790A694Cdc6959 = "623c92c697790a694cdc6959",
}

export enum Dia {
  Domingo = "domingo",
  Jueves = "jueves",
  Lunes = "lunes",
  Martes = "martes",
  Miércoles = "miércoles",
  Sábado = "sábado",
  Viernes = "viernes",
}
