import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroRut'
})
export class FiltroRutPipe implements PipeTransform {

  transform(value: any, campo:string, args:string,): any {
    if(!value)return null;
    if(!args)return value;

    return value.filter((singleItem: { [x: string]: { toLowerCase: () => { (): any; new(): any; includes: { (arg0: string): string; new(): any; }; }; }; }) =>
      singleItem[campo].toLowerCase().includes(args).toLowerCase());
    }
}
