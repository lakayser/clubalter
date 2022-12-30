export interface Canchas {
  _id:            string;
  name:           string;
  disponibilidad: boolean;
  organization:   Organization[];
  rangoHorario:   number;
  estado:         boolean;
  createdAt:      Date;
  updatedAt:      Date;
}

export interface Organization {
  _id:       string;
  name:      string;
  estado:    boolean;
  createdAt: Date;
  updatedAt: Date;
}
