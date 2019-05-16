import { TarefaService } from '../../../config/firebase/tarefa.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})

export class TarefaComponent implements OnInit {
  title = "Minhas Tarefas";

  constructor(public service: TarefaService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.NovaTarefaData = {
      id: null,
      tarefa: '',
      prioridade: '',
      data: null,
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('tarefas').add(data);
    else
      this.firestore.doc('tarefas/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Enviado com sucesso', 'Tarefa Registrada');
  }

}
