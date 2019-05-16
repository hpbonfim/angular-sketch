import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TarefaService } from '../../../config/firebase/tarefa.service';
import { Tarefa } from '../../../config/firebase/tarefa.model';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})

export class ListaTarefasComponent implements OnInit {

  list: Tarefa[];

  constructor
    (
      private toastr:ToastrService,
      private firestore: AngularFirestore,
      private service: TarefaService
    ) { }

  ngOnInit() {
    this.service.getTarefas().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Tarefa;
      })
    });
  }

  onEdit(task: Tarefa) {
    this.service.NovaTarefaData = Object.assign({}, task);
  }

  onDelete(id: string) {
    if (confirm("Tem certeza que quer deletar a tarefa?")) {
      this.firestore.doc('tarefas/' + id).delete();
      this.toastr.info('Deletado com sucesso','Tarefas');
    }
  }
}
