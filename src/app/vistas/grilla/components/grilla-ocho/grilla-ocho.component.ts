import { Component, OnInit } from '@angular/core';
import { thresholdFreedmanDiaconis } from 'd3';
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
    setResultado  : number;

  constructor( private inscritosService: InscritosService ) { }

  ngOnInit(): void {
    this.listarInscritos();
  }

  listarInscritos() {
    this.inscritosService.listarInscritos()
      .subscribe( inscritos => {
        this.inscritosJ = inscritos;
        console.log( this.inscritosJ )
      })
  }
}
