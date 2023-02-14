import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/servicios/mail.service';

@Component({
  selector: 'app-canchasbicho',
  templateUrl: './canchasInicio.component.html',
  styleUrls: ['./canchasInicio.component.css']
})
export class CanchasInicioComponent implements OnInit {

  display: boolean = false;

  reactiveForm: FormGroup;

  constructor(private mailservice:MailService, private formBuilder: FormBuilder) { 
     this.reactiveForm = this.formBuilder.group({
      emailPersona: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
      subject: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  showDialog() {
      this.display = true;
  }
onSubmit(){
  this.mailservice.postEmail(this.reactiveForm.value).subscribe((res)=>{
    console.log(this.reactiveForm.value)
  })
}
}
