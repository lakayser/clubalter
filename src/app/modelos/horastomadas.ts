export interface HorasTomadas {
    _id:          string;
    horascanchas: Horascancha[];
    cancha:       Cancha[];
    rut:          string;
    codigoVenta:  string;
    organization: string[];
    estado:       boolean;
    createdAt:    Date;
    updatedAt:    Date;
}

export interface Cancha {
    _id:            string;
    name:           string;
    disponibilidad: boolean;
    organization:   string[];
    rangoHorario:   number;
    estado:         boolean;
    createdAt:      Date;
    updatedAt:      Date;
}

export interface Horascancha {
    _id:            string;
    fecha:          Date;
    horario:        string;
    disponibilidad: boolean;
    cancha:         string[];
    canchaId:       string[];
    precio:         number;
    dia:            string;
    semana:         number;
    createdAt:      Date;
    updatedAt:      Date;
}