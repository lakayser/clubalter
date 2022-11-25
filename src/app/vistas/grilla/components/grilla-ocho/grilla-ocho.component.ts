import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-ocho',
  templateUrl: './grilla-ocho.component.html',
  styles: [
    `
      .grillaStyle {
        background-color: #33CC86;
        border-radius: 0.6rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
    `
  ]
})
export class GrillaOchoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
