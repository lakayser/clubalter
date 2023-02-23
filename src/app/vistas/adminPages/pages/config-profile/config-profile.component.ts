import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-config-profile',
  templateUrl: './config-profile.component.html',
  styleUrls: ['./config-profile.component.css']
})
export class ConfigProfileComponent implements OnInit{

  @ViewChild("contra") contra : ElementRef<HTMLInputElement>;

  nombre: Usuario[];
  
  reactiveForm2: FormGroup;
  pass: string;
  comparationpass: string;
  display: boolean = false;
  display2: boolean = false;

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
  
  constructor(public usuariosService: UsuariosService, private formBuilder: FormBuilder){
    this.reactiveForm2 = this.formBuilder.group({
      _id: new FormControl(''),
      nameUser: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getActivo();
  }
  getActivo() {
    this.usuariosService.getActivo().subscribe((resp) => {
      this.usuariosService.nombre = resp;
      console.log(resp)
      resp.map(passwd=>{
        this.comparationpass = passwd.password
      })
    })
  }
  getPass(){
    
    this.pass = this.contra.nativeElement.value;
    console.log(this.pass)
    
  }
  coparatepasswd(passUser:string, passencrypt:string):boolean{
    return bcrypt.compareSync(passUser,passencrypt)
  }
  onlogin(){
    const a = this.coparatepasswd(this.pass, this.comparationpass)
    if (a) {
      console.log('siii')
    }else{
      console.log('nooo')
    }
  }
  getControl2(name: any): AbstractControl | null {
    return this.reactiveForm2.get(name)
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
  showDialog(nombre: Usuario) {
    this.display = true;
    this.usuariosService.selectedUsuario = nombre;
    this.datos = nombre
    console.log(this.datos)
    this.reactiveForm2.patchValue({ _id: this.datos._id ,nameUser: this.datos.nameUser, email: this.datos.email, telefono: this.datos.telefono, direccion: this.datos.direccion})

  }
  showDialog2(){
    this.display2 =true;

  }
  onSubmit2(){
    this.usuariosService.putUsuario(this.reactiveForm2.value).subscribe((res) => {
      this.getActivo();
      this.reactiveForm2.reset();
      this.display = false;
      console.log(res)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,


      })
    }
    , err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error,
        timer: 2500
      });
    })
    
  }
}
