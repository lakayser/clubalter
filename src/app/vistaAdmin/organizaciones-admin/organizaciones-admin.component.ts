import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';


@Component({
  selector: 'app-organizaciones-admin',
  templateUrl: './organizaciones-admin.component.html',
  styleUrls: ['./organizaciones-admin.component.css']
})
export class OrganizacionesAdminComponent implements OnInit {

  constructor(private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService) { }

  ngOnInit(): void {
    
    this.getActivo();
    this.getOrganization();
  }

  getOrganization(){
    this.organizationService.getOrganization().subscribe((res)=>{
      this.organizationService.organizaciones=res;
    });
  }
    addOrganization(form:NgForm){
      this.organizationService.createOrganization(form.value).subscribe((res)=>{
        console.log(res);
        this.getOrganization();
        form.reset();
      });
      // if (form.value._id){
      //   this.organizationService.putOrganization(form.value).subscribe((res)=>{
      //     console.log(res);
      //     this.getOrganization();
      //     format.reset();
          
      //   });
      // } else{
        
      // }
    }
  


  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }

  
  // deleteUsuario(_id: any) {
  //   if (confirm('Esta seguro que desea eliminar esta reserva?')) {
  //     this.usuariosService.deleteUsuario(_id).subscribe(
  //       (res) => {
  //         this.getUsuarios();
  //       },
  //       (err) => console.log(err)
  //     );
  //   }

  // }
  // editUsuario(users: Usuario) {
  //   this.usuariosService.selectedUsuario = users;


  // }
}
