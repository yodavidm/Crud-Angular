import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-z';

  estaAutenticado: boolean = false;

  constructor(private router:Router,private auth:AuthService){}

  ngOnInit(): void {
    this.auth.estaAutenticado().subscribe(autenticado => {
      this.estaAutenticado = autenticado;
    });
  }

  sobreNosotros(){
    Swal.fire('Caíste, no vuelvas a tocar este botón!!');
    this.router.navigate(['index'])
  }

  logout(){
    Swal.fire('Cerraste sesión correctamente');
    this.auth.logout();
    this.router.navigate(['index'])
  }


}
