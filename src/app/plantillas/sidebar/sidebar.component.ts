import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { ApiService } from '../../servicios/api/api.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display: boolean = false;
  items: MenuItem[];

  constructor(private observer: BreakpointObserver, public apiService: ApiService, public usuariosService: UsuariosService) { }
  orga: any;
  rol: any;
  jk: any;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
  ];
    this.getActivo();
    this.menuDisplay();
    
  }

  getActivo() {
    this.usuariosService.getActivo().subscribe((resp) => {
      this.usuariosService.nombre = resp;
      console.log(resp)

    })
  }
  menuDisplay() {

    this.orga = localStorage.getItem('organization');
    this.rol = localStorage.getItem('rol');
    //CANCHAS EL BICHO
    if (this.orga === '623c92c697790a694cdc6959') {
      console.log(this.jk);
      if (this.rol === '620c0d94b83e4a21f81253d7') {
        //moderator
        this.jk = 1;
        console.log(this.jk);
      }
      if (this.rol === '63111b712b21bfd30c4d9e02') {
        //subadmin
        this.jk = 2;
        console.log(this.jk);
      }
      if (this.rol === '620c0d94b83e4a21f81253d6') {
        //user
        this.jk = 3;
      }
    }
    //BOLIOT
    if (this.orga === '624f01c7f0bc4892296abfe7') {

      this.jk = 4;
      console.log(this.jk);
    }
  }


}
