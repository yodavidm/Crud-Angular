import { Injectable } from '@angular/core';
//modulo firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
//modelo
import { Personaje } from './personaje.model';



@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private angularFirestore: AngularFirestore) { }

  //métodos crud
  getPersonajes() {
    //devuelve un Observable que emite cambios en la colección "personajes"
    return this.angularFirestore.collection('personajes').snapshotChanges();
  }

  getPersonajePorId(id:string) {
    return this.angularFirestore.collection('personajes').doc(id).valueChanges();
  }

  crearPersonaje(personaje: Personaje) {
    //promesa
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('personajes').add(personaje).then((response) => {
        console.log(response + "personaje creado exitosamente");
      }, (error) => {
        reject(error);
      })
    })
  }

  editarPersonaje(personaje: Personaje, id:string) {
    return this.angularFirestore.collection('personajes').doc(id).update({
      nombre: personaje.nombre,
      raza: personaje.raza,
      poder: personaje.poder
    });
   }
   
   eliminarPersonaje(personaje:Personaje) {
    return this.angularFirestore.collection('personajes').doc(personaje.id).delete()
      .then(() => {
        console.log('Personaje eliminado exitosamente');
      })
      .catch((error) => {
        console.error('Error al eliminar el personaje:', error.message);
      });
  }
}
