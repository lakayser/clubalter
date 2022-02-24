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

  constructor(private router: Router, public usuariosService: UsuariosService) { }

  public usuarios: Array<any> = [];



  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      (res) => {
        this.usuariosService.users = res;
      },
      (err) => console.error(err)
    )
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuariosService.putUsuario(form.value).subscribe((res) => {
        console.log(res);
  
      });
    } else {
      this.usuariosService.createUsuario(form.value).subscribe((res) => {
        console.log(res); 
      });
    }
  }

  deleteUsuario(_id: any) {
    if (confirm('Esta seguro que desea eliminar este usuario?')) {
      this.usuariosService.deleteUsuario(_id).subscribe(
        (res) => {
          this.getUsuarios();
        },
        (err) => console.log(err)
      );
    }

  }
  editUsuario(users: Usuario) {
    this.usuariosService.selectedUsuario = users;


  }

}

