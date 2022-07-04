import { Component, OnInit } from '@angular/core';
import {TransbankService  } from '../../servicios/transbank.service'
@Component({
  selector: 'app-portal-pago',
  templateUrl: './portal-pago.component.html',
  styleUrls: ['./portal-pago.component.css']
})
export class PortalPagoComponent {

  public datos: Array<any> =[];
 
  constructor(
    private transbankServices: TransbankService
  ) { 
    // this.transbankServices.getTransbank().subscribe((res: any) => {
    //   this.datos=res
    //   console.log(res)
      
    // })
  }

  

}
