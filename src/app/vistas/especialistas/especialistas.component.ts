import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.css']
})
export class EspecialistasComponent implements OnInit {

  public usuarios: Array<any> = [];
  
  selectedUsuario: Usuario ={
    nameUser: '',
    password: '' ,
    organization: '' ,
    ocupation: '' 
  };


  constructor(private router: Router, private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      res => this.usuarios = res

    )
  }
  addUsuario(form: NgForm) {
    this.usuarioService.createUsuario(form.value).subscribe(
     res => console.log(res),
     err => console.error(err)
      )
    
  }
}

