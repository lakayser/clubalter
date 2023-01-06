import { Component, OnInit } from '@angular/core';
import { Inscritos } from '../../interface/inscritos';
import { InscritosService } from '../../services/inscritos.service';

@Component({
  selector: 'app-grilla-ocho',
  templateUrl: './grilla-ocho.component.html',
  styleUrls: ['./grilla-ocho.component.css']
})
export class GrillaOchoComponent implements OnInit {

  display: boolean = false;
  inscritosJ: Inscritos[] = [];
  jugadores: string[] = [];;
  setResultado: number;
  color1: string = 'text-white';
  color2: string = 'text-white';

  constructor(private inscritosService: InscritosService) { }

  ngOnInit(): void {
    this.listarInscritos();
    this.cambioColor();
  }

  listarInscritos() {
    this.inscritosService.getInscritos()
      .subscribe(inscritos => {
        this.inscritosJ = inscritos;
        console.log('Inscritos', this.inscritosJ);
      })
  }

  cambioColor() {
    this.inscritosService.getInscritos()
      .subscribe(inscritos => {
        this.inscritosJ = inscritos;
        if (this.inscritosJ[0].setGanado < 2) {
          this.color1 = 'text-blue-500';
        }
        if (this.inscritosJ[1].setGanado < 2) {
          this.color2 = 'text-blue-500';
        }
      })
  }

}
