import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Organization } from 'src/app/modelos/organization';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';

@Component({
  selector: 'app-usercrud-moderator',
  templateUrl: './usercrud-moderator.component.html',
  styleUrls: ['./usercrud-moderator.component.css']
})
export class UsercrudModeratorComponent implements OnInit {


  constructor(private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService, public ocupationService:OcupationService) { }
  
  public ocupations: Array<any> = [];

  ngOnInit(): void {
    this.getUsuarios();
    this.getActivo();
    this.getOcupation();
    this.getOrganization();
  }

  getOrganization(){
    this.organizationService.getOrganization().subscribe((res)=>{
      this.organizationService.organizaciones=res;
      console.log(res);
      
    })
  }
  getOcupation(){
    this.ocupationService.getOcupation().subscribe((res)=>{
      this.ocupationService.ocupa=res;
      console.log('ocupation'+res);
      
    })
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
