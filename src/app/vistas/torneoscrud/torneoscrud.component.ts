import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneoscrud',
  templateUrl: './torneoscrud.component.html',
  styleUrls: ['./torneoscrud.component.css']
})
export class TorneoscrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(){
    this.router.navigate(['/canchaselbicho/CrearTorneo'])
  }
}
