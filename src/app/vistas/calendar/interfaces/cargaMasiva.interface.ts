export interface CargaMasivaCalendar {
    _id:            string;
    fechaInicio:    Date;
    fechaFinal:     Date;
    semana:         number;
    cancha:         Cancha[];
    precio:         number;
    dia:            string;
    rangoHorario:   string;
    disponibilidad: Disponibilidad[];
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
    The625Ec62558F5Fcde8C9D5433 = "625ec62558f5fcde8c9d5433",
}

export enum Name {
    Cancha2 = "Cancha 2",
}

export enum Organization {
    The623C92C697790A694Cdc6959 = "623c92c697790a694cdc6959",
}

export interface Disponibilidad {
    noAgendado: boolean;
    agendado:   boolean;
    torneo:     boolean;
    clases:     boolean;
}