export interface EmparejadosTorneo {
  _id             :string;
  equipo          :string;
  jugadores       :string;
  setsPrimeraRonda: [
    set1:number,
    set2:number,
    set3:number,
  ];
  setsGanados     :number;

  _idRival             :string;
  equipoRival          :string;
  jugadoresRival       :string;
  setsPrimeraRondaRival: [
    set1:number,
    set2:number,
    set3:number,
  ];
  setsGanadosRival     :number;
}

export interface EmparejadosTorneo2 {
  _id             :string;
  equipo          :string;
  jugadores       :string;
  setsSegundaRonda: [
    set1:number,
    set2:number,
    set3:number,
  ];
  setsGanados     :number;

  _idRival             :string;
  equipoRival          :string;
  jugadoresRival       :string;
  setsSegundaRondaRival: [
    set1:number,
    set2:number,
    set3:number,
  ];
  setsGanadosRival     :number;
}