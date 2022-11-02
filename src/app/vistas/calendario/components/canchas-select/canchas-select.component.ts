import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Canchas } from '../../interface/cancha-interface';

import { CanchaService } from '../../services/cancha.service';

@Component({
  selector: 'app-canchas-select',
  templateUrl: './canchas-select.component.html',
  styles: [
    `
      select {
        background-color: #CCCC;
        border-radius: 0.4rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
        width: 220px;
      }
    `
  ],
})
export class CanchasSelectComponent implements OnInit {

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  canchas: Canchas[] = [];
  opcionSeleccionada: string =  '';

  constructor( private canchaService: CanchaService ) { }

  ngOnInit(): void {
    this.canchaService.verCanchas()
      .subscribe( resp => {
        this.canchas = resp;
      });
  }

  verCanchas() {
    this.onClick.emit( this.opcionSeleccionada );
  }

}
