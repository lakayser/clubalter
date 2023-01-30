export interface Inscritos {
    _id:             string;
    nombreEquipo:    string;
    participantes:   string[];
    nombreJugador1:  string;
    nombreJugador2:  string;
    pago:            boolean;
    estado:          boolean;
    torneo:          string[];
    setPrimeraRonda: number[];
    setSegundaRonda: number[] | null;
    setFinal:        number[] | null;
    setGanado:       number;
    createdAt:       Date;
    updatedAt:       Date;
}