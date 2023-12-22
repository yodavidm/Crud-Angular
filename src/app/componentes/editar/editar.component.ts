import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeService } from 'src/app/personaje.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public editarForm:FormGroup;
  personajeRef:any;

  constructor(
    private personajeService:PersonajeService,
    private formBuilder:FormBuilder,
    private activeRoute:ActivatedRoute,
    private router:Router){
      this.editarForm = formBuilder.group({
        nombre: [""],
        raza: [""],
        poder: [""],
      })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.personajeService.getPersonajePorId(id).subscribe( res=>{
      this.personajeRef = res;
      this.editarForm = this.formBuilder.group({
        nombre: [this.personajeRef.nombre],
        raza: [this.personajeRef.raza],
        poder: [this.personajeRef.poder],
      })
    })
  }

  onSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.personajeService.editarPersonaje(this.editarForm.value,id);
    this.router.navigate(['/lista']);
  }

  editar(){
    Swal.fire('Personaje editado correctamente');

  }

}
