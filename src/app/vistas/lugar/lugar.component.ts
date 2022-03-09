import { Component, OnInit } from '@angular/core';
import { TransbankService } from 'src/app/servicios/transbank.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  public datos: Array<any> =[];
 
  constructor(public transbankServices:TransbankService) { }
  


  ngOnInit(): void {
    this.getTransbank()
  }

  getTransbank(){
    this.transbankServices.getTransbank().subscribe((res: any) => {
      this.datos=res
      console.log(res)
    });
  }
}
