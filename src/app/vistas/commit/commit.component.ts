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

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      var token = params['token_ws'];
      console.log(token);
      this.estesiesunget(`${token}`)
      // this.postcommit(`${token}`);
    });
    // this.postcommit(this.datos);
  //  this.estesiesunget();
  }

  postcommit(datos:any){
    this.transbankServices.postCommit(datos.value).subscribe((res:any) =>{
      console.log(res);
      
    })
  }

  estesiesunget(token:string){
    this.transbankServices.getCommits(token).subscribe((res: any)=>{
     this.datos = res;
      console.log(res);
      
    })
  }
}
