import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonajeService } from 'src/app/personaje.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  template: `
  <button (click)="guardar()">Mostrar SweetAlert</button>
`,
})
export class CrearComponent implements OnInit{

  public personajeForm:FormGroup;

  constructor(private personajeService:PersonajeService,private router:Router,private formBuilder:FormBuilder){
    //inicializamos propiedades
    this.personajeForm = this.formBuilder.group({
      nombre: [""],
      raza: [""],
      poder:[""]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.personajeService.crearPersonaje(this.personajeForm.value);
    this.router.navigate(['/lista']);
  }

  guardar(){
    Swal.fire('Personaje creado correctamente');
  }

}
