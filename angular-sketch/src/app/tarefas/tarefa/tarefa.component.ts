import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/firebase/tarefa.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  constructor(private service: TarefaService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      tarefa: '',
      prioridade: '',
      outros: '',
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
