import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Informacoes } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class InformacoesService {
  userData: Informacoes;

  constructor(private firestore: AngularFirestore) { }

  getUserInfo() {
    return this.firestore.collection('informacoes').snapshotChanges();
  }
}
