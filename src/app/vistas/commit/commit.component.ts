import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransbankService } from 'src/app/servicios/transbank.service';
@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  public datos: Array<any> = [];

  constructor(private router: Router, private route:ActivatedRoute, private transbankServices: TransbankService) { }

  ngOnInit(): void {
    this.getcommit();
  
  }

  getcommit(){
    this.transbankServices.getCommit().subscribe((res:any) =>{
      this.datos = res;
      console.log(res);
      
    })
  }
}
