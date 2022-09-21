import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { Organization } from 'src/app/modelos/organization';
import { OcupationService } from 'src/app/servicios/ocupation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-organizaciones-admin',
  templateUrl: './organizaciones-admin.component.html',
  styleUrls: ['./organizaciones-admin.component.css']
})
export class OrganizacionesAdminComponent implements OnInit {

  constructor(private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService,  public ocupationService:OcupationService) { }

  ngOnInit(): void {
    this.getOcupation();
    // this.getActivo();
    this.getOrganization();
  }

  getOrganization(){
    this.organizationService.getOrganization().subscribe((res)=>{
      this.organizationService.organizaciones=res;
      console.log(res) 
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
            text: err.error.Message,
            timer: 2500
          });
      });
      }

    }
    editOrganization(organizaciones: Organization){
      this.organizationService.selectedOrganization = organizaciones;
    }


  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log(resp)
      
    })
  }
  deleteOrganization(_id: any){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  Swal.fire({
    title: 'Estas seguro que deseas elimianr esta Organizacion?',
    text: "No podras revertir esta accion",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.organizationService.deleteOrganization(_id).subscribe(
        (res)=>{ 
          this.getOrganization();
          Swal.fire(
            'Eliminado!',
            'Organizacion Eliminada Con exito',
            'success'
          )})
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'La Organizacion esta a salvo',
        'error'
      )
    }
  })
}


  addOcupation(form: NgForm){
    this.ocupationService.createOcupationAdmin(form.value).subscribe((res)=>{
      console.log(res);
      this.getOcupation();
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
        text: err.error.Message,
        timer: 2500
      });
    })
  }
  getOcupation(){
    this.ocupationService.getOcupationAdmin().subscribe((res)=>{
      this.ocupationService.ocupa=res;
      console.log(res);
      
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
