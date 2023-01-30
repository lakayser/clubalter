export interface Participantes {
  _id             : string;
  equipo          : string;
  jugadores       :string;
  setsPrimeraRonda: [
    set1: number | undefined,
    set2: number | undefined,
    set3: number | undefined,
  ];
  setsSegundaRonda: [
    set1: number | undefined,
    set2: number | undefined,
    set3: number | undefined,
  ];
  setsGanados     : number;

  _idRival             : string;
  equipoRival          : string;
  rivales              : string;
  setsPrimeraRondaRival: [
    set1: number | undefined,
    set2: number | undefined,
    set3: number | undefined,
  ];
  setsSegundaRondaRival: [
    set1: number | undefined,
    set2: number | undefined,
    set3: number | undefined,
  ];
  setsGanadosRival     : number;
}

export interface Participantes2 {
  _id             : string;
  equipo          : string;
  jugadores       :string;
  setsSegundaRonda: [
    set1: number | undefined,
    set2: number | undefined,
    set3: number | undefined,
  ];
  setsGanados     : number;
}