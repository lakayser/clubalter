export interface EditarHoras {
  _id:          string;
  horascanchas: Horascancha[];
  cancha:       Cancha[];
  organization: Organization[];
  rut:          string;
  codigoVenta:  string;
  estado:       boolean;
  createdAt:    Date;
  updatedAt:    Date;
  __v?:         number;
}

export interface Cancha {
  _id:            CanchaElement;
  name:           CanchaName;
  disponibilidad: boolean;
  organization:   OrganizationElement[];
  rangoHorario:   number;
  estado:         boolean;
  createdAt:      Date;
  updatedAt:      Date;
}

export enum CanchaElement {
  The62573Cb3A51E0Babfb0E83Ef = "62573cb3a51e0babfb0e83ef",
  The625Ec62558F5Fcde8C9D5433 = "625ec62558f5fcde8c9d5433",
  The633D8E6469Afc971Df95Eff3 = "633d8e6469afc971df95eff3",
}

export enum CanchaName {
  Cancha1 = "Cancha 1",
  Cancha2 = "Cancha 2",
  CanchaPrueba = "cancha Prueba",
}

export enum OrganizationElement {
  The623C92C697790A694Cdc6959 = "623c92c697790a694cdc6959",
}

export interface Horascancha {
  _id:            string;
  fecha:          Date;
  horario:        string;
  disponibilidad: boolean;
  cancha:         CanchaElement[];
  precio:         number;
  dia:            string;
  semana:         number;
  createdAt:      Date;
  updatedAt:      Date;
}

export interface Organization {
  _id:       OrganizationElement;
  name:      OrganizationName;
  estado:    boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum OrganizationName {
  CanchasElBicho = "canchas el bicho",
}
