import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service';
import {Usuario} from '../../modelos/usuario'

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.css']
})
export class EspecialistasComponent implements OnInit {



  constructor(private usuarioService: UsuariosService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      res => console.log(res)
      
    )
  }

}
