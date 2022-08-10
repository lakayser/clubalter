import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Organization } from 'src/app/modelos/organization';
import { Usuario } from '../../modelos/usuario'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.component.html',
  styleUrls: ['./adminusuarios.component.css']
})

export class AdminusuariosComponent implements OnInit {

  constructor(private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService, public ocupationService:OcupationService) { }
  
  public ocupations: Array<any> = [];

  ngOnInit(): void {
    this.getUsuarios();
    this.getOrganization();
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
        console.log(err);
        
    });
    }
  }

  deleteUsuario(_id: any) {
    // if (confirm('Esta seguro que desea eliminar esta reserva?')) {
    //   this.usuariosService.deleteUsuarioAdmin(_id).subscribe(
    //     (res) => {
    //       this.getUsuarios();
    //     },
    //     (err) => console.log(err)
    //   );
    // }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      Swal.fire({
        title: 'Estas seguro que deseas elimianr este Usuario?',
        text: "No podras revertir esta accion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.usuariosService.deleteUsuarioAdmin(_id).subscribe(
            (res)=>{this.getUsuarios();
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
            'El usuario esta a salvo',
            'error'
          )
        }
      })

  }
  editUsuario(users: Usuario) {
    this.usuariosService.selectedUsuario = users;
  }
  getOrganization(){
    this.organizationService.getOrganization().subscribe((res)=>{
      this.organizationService.organizaciones=res;
      console.log(res);
      
    })
  }
}
