import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    nameUser: '',
    password: ''
  }

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

}
