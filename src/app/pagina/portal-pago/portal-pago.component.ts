import { Component, OnInit } from '@angular/core';
import { TransbankService } from 'src/app/servicios/transbank.service';
@Component({
  selector: 'app-portal-pago',
  templateUrl: './portal-pago.component.html',
  styleUrls: ['./portal-pago.component.css']
})
export class PortalPagoComponent implements OnInit {

  public datos: Array<any> =[];
 
  constructor(
    private transbankServices: TransbankService
  ) { 
    this.transbankServices.getTransbank().subscribe((res: any) => {
      this.datos=res
      console.log(res)
      
    })
  }

  ngOnInit(): void {
  }

}
