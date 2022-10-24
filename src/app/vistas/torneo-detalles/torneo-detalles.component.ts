import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneo-detalles',
  templateUrl: './torneo-detalles.component.html',
  styleUrls: ['./torneo-detalles.component.css']
})
export class TorneoDetallesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(){
    this.router.navigate(['/canchaselbicho/CrearTorneo'])
  }
}
