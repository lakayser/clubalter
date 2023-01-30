import { Component } from '@angular/core';
import { CargaMasivaService } from '../../services/carga-masiva.service';

@Component({
  selector: 'app-agendar-registrado',
  templateUrl: './agendar-registrado.component.html',
  styles: [
  ]
})
export class AgendarRegistradoComponent {

  constructor(private cargaMasivaService: CargaMasivaService){  }

}
