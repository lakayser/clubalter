import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TransbankService } from '../../servicios/transbank.service'
@Component({
  selector: 'app-portal-pago',
  templateUrl: './portal-pago.component.html',
  styleUrls: ['./portal-pago.component.css']
})
export class PortalPagoComponent implements OnInit {

  public datos: Array<any> = [];

  constructor(private router: Router, private route:ActivatedRoute, private transbankServices: TransbankService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var CodigoVenta = params.get('CodigoVenta');
      
      this.getCodigoVenta(CodigoVenta);
    });
  }

  getCodigoVenta(CodigoVenta: any) {
    this.transbankServices.getTransbank(CodigoVenta).subscribe((res: any) => {
      this.datos = res
      console.log(res)
    })
  }
  

}
