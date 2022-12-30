import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/servicios/mail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public mailService: MailService) { }

  ngOnInit(): void {
  }
  
  enviarEmail(form:NgForm)
  {
      this.mailService.postEmail(form.value).subscribe((res)=>{
        console.log(res);
        form.reset();
    });;
  }

}
