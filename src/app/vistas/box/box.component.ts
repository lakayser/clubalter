import { Component } from '@angular/core';
import { TransbankService } from 'src/app/servicios/transbank.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent{

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
