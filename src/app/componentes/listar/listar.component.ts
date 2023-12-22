import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Personaje } from 'src/app/personaje.model';
import { PersonajeService } from 'src/app/personaje.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  Personajes:Personaje[];

  usuarioAutenticado: boolean = false;
  constructor(private personajeService:PersonajeService,private auth:AuthService){}

  ngOnInit(): void {
    this.auth.estaAutenticado().subscribe((autenticado) => {
      this.usuarioAutenticado = autenticado;
    });
    //observable
    this.personajeService.getPersonajes().subscribe((res)=>{
      this.Personajes = res.map((e)=>{
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Personaje)
        }
      });
    })
  }

  eliminarRegistro(personaje) {
    Swal.fire('Personaje eliminado correctamente');
    return this.personajeService.eliminarPersonaje(personaje);
  }
}
