import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HorasSemana } from '../../interface/horas-interface';

@Component({
  selector: 'app-ver-horas',
  templateUrl: './ver-horas.component.html',
  styles: [
  `
    li {
      list-style: none;
    }
    .diasDisp {
      background-color: #33CC86;
      border-radius: 0.4rem;
      box-shadow: 0rem 0.1rem 0.1rem #303030;
    }
    .diasNoDisp{
      background-color: #E4E4E4;
      border-radius: 0.4rem;
      box-shadow: 0rem 0.1rem 0.1rem #303030;
    }
    span {
    font-size: 0.8rem;
    color    : black;
    }
    .textDisp {
      font-size: 0.7rem;
    }
    .horasTransition {
      transition: all 3s;
    }
    i {
      font-size: 2rem;
    }
    i:hover {
      cursor: pointer;
    }
    .id:hover {
      cursor: pointer;
    }
  `
  ]
})
export class VerHorasComponent implements OnInit {

  @Input() horas    : HorasSemana[] = [];
  @Input() id       : string = '';
  @Output() onClick : EventEmitter<string> = new EventEmitter();
  @Output() onClickD: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  obtenerId( horas: string ) {
    this.onClick.emit( horas );
  }

  obtenerHora( hora: string ) {
    this.onClickD.emit( hora );
  }

}
