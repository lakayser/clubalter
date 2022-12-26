import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Organization } from 'src/app/modelos/organization';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';
import { RolesService } from 'src/app/servicios/roles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crudsubadmin',
  templateUrl: './crudsubadmin.component.html',
  styleUrls: ['./crudsubadmin.component.css']
})
export class CrudsubadminComponent implements OnInit {

  
  constructor(public roleservice:RolesService,private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService, public ocupationService:OcupationService) { }
  
  public ocupations: Array<any> = [];

  ngOnInit(): void {
    this.getUsuarios();
    // this.getActivo();
     this.getrol();
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
      console.log(res);
      
    })
  }
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((res) => {
        this.usuariosService.users = res;
        console.log(res);
      }); 
  } 

  getrol(){
    this.roleservice.getRoleMod().subscribe((res)=>{
      this.roleservice.roles=res;
      console.log(res)
    })
  }
  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log(resp)
    })
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuariosService.putUsuario(form.value).subscribe((res) => {
        console.log(res);
        this.getUsuarios();
        form.reset();
      
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res,
          showConfirmButton: false,
          timer: 1200,
          timerProgressBar: true,


        })
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error,
          timer: 2500
        });
      });
    } else {
      this.usuariosService.createUsuario(form.value).subscribe((res) => {
        console.log(res); 
        this.getUsuarios();
        form.reset();
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res,
          showConfirmButton: false,
          timer: 1200,
          timerProgressBar: true,


        })
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error,
          timer: 2500
        });
      });
    }
  }

  deleteUsuario(_id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    Swal.fire({
      title: 'Estas seguro que deseas elimianr este usuario?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.deleteUsuario(_id).subscribe(
          (res) => {
            this.getUsuarios();
            Swal.fire(
              'Eliminado!',
              'Usuario Eliminado Con exito',
              'success'
            )})
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'usuario a salvo',
          'error'
        )
      }
    })
  }

  editUsuario(users: Usuario) {
    this.usuariosService.selectedUsuario = users;
  }

}
