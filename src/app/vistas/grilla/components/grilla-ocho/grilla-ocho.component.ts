import { Component, OnInit } from '@angular/core';
import { Inscritos } from '../../interface/inscritos';
import { InscritosService } from '../../services/inscritos.service';

@Component({
  selector: 'app-grilla-ocho',
  templateUrl: './grilla-ocho.component.html',
  styleUrls: [ './grilla-ocho.component.css']
})
export class GrillaOchoComponent implements OnInit {
  display       : boolean = false;
  inscritosJ    : Inscritos[] = [];
  jugadores     : string[] = [];;
  setResultado  : number;
  equipoA: any;

  constructor( private inscritosService: InscritosService ) { }

  ngOnInit(): void {
    this.listarInscritos();
  }

  listarInscritos() {
    this.inscritosService.getInscritos()
      .subscribe( inscritos => {
        this.inscritosJ = inscritos;
        this.inscritosJ.map( a => {
          a.participantes.map( b => {
            this.jugadores.push( b.nameUser );
            console.log( this.jugadores );
          })
        })
        console.log( this.equipoA );
        console.log( this.inscritosJ )
      })
  }
}
