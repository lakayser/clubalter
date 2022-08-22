export interface CargaMasiva{
   _id: string,
   fecha: string,
   dia: string,
   disponibilidad: boolean,
   horario: string,
   cancha: string[] | boolean[],
   precio: number,
   semana: number,
}
