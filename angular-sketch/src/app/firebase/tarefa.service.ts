import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  formData: Tarefa;

  constructor(private firestore: AngularFirestore) { }

  getTarefas() {
    return this.firestore.collection('tarefas').snapshotChanges();
  }
}
