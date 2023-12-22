import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.auth.signOut().then(() => {
    }).catch((error) => {
      alert("Error al cerrar sesión: " + error.message);
    });
  }

  estaAutenticado(): Observable<boolean> {
    return this.auth.authState.pipe(map(user => !!user));
  }



}
