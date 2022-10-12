export interface CargaMasiva{
   _id: string,
   fecha: Date,
   dia: string,
   disponibilidad: boolean,
   horario: string,
   cancha: string[] | boolean[],
   precio: number,
   semana: number,
}
