import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Organization } from 'src/app/modelos/organization';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.component.html',
  styleUrls: ['./adminusuarios.component.css']
})

export class AdminusuariosComponent implements OnInit {

  constructor(private router: Router, public usuariosService: UsuariosService, public organization:OrganizationService, public ocupationService:OcupationService) { }
  
  public ocupations: Array<any> = [];

  ngOnInit(): void {
    this.getUsuarios();
    
    this.getOcupation();
  }

  getOcupation(){
    this.ocupationService.getOcupationAdmin().subscribe((res)=>{
      this.ocupationService.ocupa=res;
      console.log('ocupation'+res);
      
    })
  }
  getUsuarios() {
    this.usuariosService.getUsuarioAdmin().subscribe((res) => {
        this.usuariosService.users = res;
        console.log(res);
      }); 
  } 


  addModerator(form: NgForm) {
    if (form.value._id) {
      this.usuariosService.putUsuarioAdmin(form.value).subscribe((res) => {
        console.log(res);
        this.getUsuarios();
        form.reset();
      });
    } else {
      this.usuariosService.createUsuarioAdmin(form.value).subscribe((res) => {
        console.log(res); 
        this.getUsuarios();
        form.reset();
      });
    }
  }

  deleteUsuario(_id: any) {
    if (confirm('Esta seguro que desea eliminar esta reserva?')) {
      this.usuariosService.deleteUsuarioAdmin(_id).subscribe(
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
