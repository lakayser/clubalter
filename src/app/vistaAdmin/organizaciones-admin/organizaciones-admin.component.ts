import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { Organization } from 'src/app/modelos/organization';
import { OcupationService } from 'src/app/servicios/ocupation.service';

@Component({
  selector: 'app-organizaciones-admin',
  templateUrl: './organizaciones-admin.component.html',
  styleUrls: ['./organizaciones-admin.component.css']
})
export class OrganizacionesAdminComponent implements OnInit {

  constructor(private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService,  public ocupationService:OcupationService) { }

  ngOnInit(): void {
    this.getOcupation();
    this.getActivo();
    this.getOrganization();
  }

  getOrganization(){
    this.organizationService.getOrganization().subscribe((res)=>{
      this.organizationService.organizaciones=res;
    });
  }
    addOrganization(form:NgForm){
      if (form.value._id){
        this.organizationService.putOrganization(form.value).subscribe((res)=>{
          console.log(res);
          this.getOrganization();
          form.reset();
          
        });
      } else{
        this.organizationService.createOrganization(form.value).subscribe((res)=>{
          console.log(res);
          this.getOrganization();
          form.reset();
        });
      }

    }
    editOrganization(organizaciones: Organization){
      this.organizationService.selectedOrganization = organizaciones;
    }


  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
  deleteOrganization(_id: any){ 
    if (confirm('Esta seguro que desea eliminar esta reserva?')) {
      this.organizationService.deleteOrganization(_id).subscribe((res)=>{
        this.getOrganization();
      },
      (err)=> console.log(err)
      );
    

  }
}


  addOcupation(form: NgForm){
    this.ocupationService.createOcupationAdmin(form.value).subscribe((res)=>{
      console.log(res);
      this.getOcupation();
      form.reset();
      
    })
  }
  getOcupation(){
    this.ocupationService.getOcupationAdmin().subscribe((res)=>{
      this.ocupationService.ocupa=res;
      console.log('ocupation'+res);
      
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
