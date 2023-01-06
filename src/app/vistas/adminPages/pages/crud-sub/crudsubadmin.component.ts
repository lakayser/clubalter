import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../servicios/usuarios.service';
import { Organization } from 'src/app/modelos/organization';
import { Usuario } from '../../../../modelos/usuario'
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators, ValidatorFn, AbstractControl, FormGroup, Form, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationService } from 'src/app/servicios/organization.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';
import { RolesService } from 'src/app/servicios/roles.service';
import Swal from 'sweetalert2';
import { passwordMatch } from '../../../validators/passwordMatch';

@Component({
  selector: 'app-crudsubadmin',
  templateUrl: './crudsubadmin.component.html',
  styleUrls: ['./crudsubadmin.component.css']
})
export class CrudsubadminComponent implements OnInit {

<<<<<<< HEAD:src/app/vistas/crudsubadmin/crudsubadmin.component.ts
  userForm!: UntypedFormGroup;

  reactiveForm: FormGroup;

  reactiveForm2: FormGroup;

  datos: Usuario={
    _id: '',
    nameUser: '',
    password: '' ,
    organization: '' ,
    ocupation: '' ,
    rut: '',
    telefono: '',
    direccion: '',
    email: '',
    service: '',
    roles: ''
  }

  display: boolean = false;

  constructor(private formBuilder: FormBuilder, public roleservice: RolesService, private router: Router, public usuariosService: UsuariosService, public organizationService: OrganizationService, public ocupationService: OcupationService) {
    this.reactiveForm = this.formBuilder.group({
      nameUser: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rut: new FormControl('', [Validators.required]),
      roles: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required])
    }, {
      validator: this.Mustmatch('password', 'confirmPassword')
    });
    this.reactiveForm2 = this.formBuilder.group({
      _id: new FormControl(''),
      nameUser: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required])
    }, {
      validator: this.Mustmatch('password', 'confirmPassword')
    });
  }
=======

  constructor(public roleservice:RolesService,private router: Router, public usuariosService: UsuariosService, public organizationService:OrganizationService, public ocupationService:OcupationService) { }

  public ocupations: Array<any> = [];
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/crud-sub/crudsubadmin.component.ts

  ngOnInit(): void {
    this.getUsuarios();
    this.getrol();
  }
  Mustmatch(password: string, confirmPassword: string) {

    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmPasswordcontrol = formGroup.controls[confirmPassword];

      if (confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors.mustMatch) {
        return;
      }
      if (passwordcontrol.value !== confirmPasswordcontrol.value) {
        confirmPasswordcontrol.setErrors({ mustMatch: true })
      } else {
        confirmPasswordcontrol.setErrors(null);
      }
    }
  }

<<<<<<< HEAD:src/app/vistas/crudsubadmin/crudsubadmin.component.ts
  getControl(name: any): AbstractControl | null {
    return this.reactiveForm.get(name)
  }
  getControl2(name: any): AbstractControl | null {
    return this.reactiveForm2.get(name)
  }
  onSubmit2(){
    this.usuariosService.putUsuario(this.reactiveForm2.value).subscribe((res) => {
      this.getUsuarios();
      this.reactiveForm2.reset();
      this.display = false;

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
=======
  getOrganization(){
    this.organizationService.getOrganization().subscribe((res)=>{
      this.organizationService.organizaciones=res;
      console.log(res);

>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/crud-sub/crudsubadmin.component.ts
    })
  }
  

  onSubmit() {
    this.usuariosService.createUsuario(this.reactiveForm.value).subscribe((res) => {
      console.log(res);
<<<<<<< HEAD:src/app/vistas/crudsubadmin/crudsubadmin.component.ts
      this.getUsuarios();
      this.reactiveForm.reset();

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

  showDialog(users: Usuario) {
    this.display = true;
    this.usuariosService.selectedUsuario=users;
    this.datos = users
    this.reactiveForm2.patchValue({ _id: this.datos._id ,nameUser: this.datos.nameUser, email: this.datos.email, telefono: this.datos.telefono, direccion: this.datos.direccion})

  }
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((res) => {
      this.usuariosService.users = res;
      console.log(res);
    });
=======

    })
  }
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((res) => {
        this.usuariosService.users = res;
        console.log(res);
      });
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/crud-sub/crudsubadmin.component.ts
  }

  getrol() {
    this.roleservice.getRoleMod().subscribe((res) => {
      this.roleservice.roles = res;
      console.log(res)
    })
  }
  getActivo() {
    this.usuariosService.getActivo().subscribe((resp) => {
      this.usuariosService.nombre = resp;
      console.log(resp)
    })
  }

<<<<<<< HEAD:src/app/vistas/crudsubadmin/crudsubadmin.component.ts
=======
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

>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/crud-sub/crudsubadmin.component.ts
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
            )
          })
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
}
