import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TarefaService } from 'src/app/components/firebase/tarefa.service';
import { Tarefa } from 'src/app/components/firebase/tarefa.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  list: Tarefa[];
  constructor(private service: TarefaService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

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
    this.service.formData = Object.assign({}, task);
  }

  onDelete(id: string) {
    if (confirm("Tem certeza que quer deletar a tarefa?")) {
      this.firestore.doc('tarefas/' + id).delete();
      this.toastr.info('Deletado com sucesso','Tarefas');
    }
  }
}
