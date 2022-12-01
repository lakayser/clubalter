import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaInscrito } from 'src/app/modelos/listaInscritos';
import { TorneosService } from 'src/app/servicios/torneos.service';
import { RutService } from 'rut-chileno';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-inscripcion-torneo',
  templateUrl: './inscripcion-torneo.component.html',
  styleUrls: ['./inscripcion-torneo.component.css']
})
export class InscripcionTorneoComponent implements OnInit {

  // inscripcion =new FormGroup({
  //   nombreEquipo: new FormControl(''),
  //   participante1: new FormControl(''),
  //   participante2: new FormControl('')


  // });
  inscripcion: UntypedFormGroup;

  cosa: any={};
  lista: ListaInscrito[];

  constructor(private fb: UntypedFormBuilder, private rutService:RutService ,private router: Router,private route:ActivatedRoute,private torneoService:TorneosService) { }

  ngOnInit(): void {
    let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
    console.log(this.cosa)
    
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
     
    });
    this.inscripcion = new UntypedFormGroup({
        nombreEquipo: new UntypedFormControl(''),
        participante1: new UntypedFormControl(''),
        participante2: new UntypedFormControl('')
    })

    this.inscripcion = this.fb.group({
        nombreEquipo: ["", [Validators.required]],
        participante1: ["", [Validators.required, this.rutService.validaRutForm]],
        participante2: ["", [Validators.required, this.rutService.validaRutForm]]
    })
  }
  inputEventp1(event : Event) {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut)
      this.inscripcion.controls['participante1'].patchValue(rut, {emitEvent :false});
  }
  inputEventp2(event : Event) {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut)
      this.inscripcion.controls['participante2'].patchValue(rut, {emitEvent :false});
  }
  
  getID(id:any){
    this.torneoService.listaInscritos(id).subscribe((res)=>{
      this.lista=res;
      console.log(res)
    })
  }


  submit() {
 
    this.torneoService.Inscripcion(this.cosa, this.inscripcion.value).subscribe((res) => {
      Swal.fire({
        title: 'Inscribirse con los datos ingresados?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `No`,
      }).then((result) => {
      
        if (result.isConfirmed) {
          Swal.fire('Equipo Registrado con Exito!', '', 'success')
          this.router.navigate(['/canchaselbicho/dashboarduser'])
          console.log(res);
        } else if (result.isDenied) {
          Swal.fire('Cancelado', '', 'info')
        }
      })
    })
  }

}
