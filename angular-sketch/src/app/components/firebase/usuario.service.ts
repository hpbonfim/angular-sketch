import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  userData: Usuario;

  constructor(private firestore: AngularFirestore) { }

  getUserInfo() {
    return this.firestore.collection('informacoes').snapshotChanges();
  }
}
