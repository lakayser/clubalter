import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  showDialog() {
    this.display = true;
}
}
