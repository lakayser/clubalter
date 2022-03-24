import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Organization } from 'src/app/modelos/organization';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.component.html',
  styleUrls: ['./adminusuarios.component.css']
})
export class AdminusuariosComponent implements OnInit {

  constructor(private router: Router, public usuariosService: UsuariosService, public organization:OrganizationService) { }
  
  ngOnInit(): void {
    this.getUsuarios();
    this.getActivo();
  }

  
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((res) => {
        this.usuariosService.users = res;
      }); 
  } 

  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuariosService.putUsuario(form.value).subscribe((res) => {
        console.log(res);
        this.getUsuarios();
        form.reset();
      });
    } else {
      this.usuariosService.createUsuario(form.value).subscribe((res) => {
        console.log(res); 
        this.getUsuarios();
        form.reset();
      });
    }
  }

  deleteUsuario(_id: any) {
    if (confirm('Esta seguro que desea eliminar esta reserva?')) {
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
