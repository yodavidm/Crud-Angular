import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  

})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email && this.password) {
      this.auth.login(this.email, this.password)
        .then((result) => {
          console.log('Inicio de sesión exitoso', result);
          Swal.fire('Iniciaste sesión correctamente');
          this.router.navigate(['lista']);

        })
        .catch((error) => {
          console.error('Error al iniciar sesión', error);
        });
    }
  }

  olvidar(){
    Swal.fire('¿Enserio creías que esta página era tan pro? Pal index que vas por listo');
  }




}
