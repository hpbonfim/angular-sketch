import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { UsuarioService } from '../firebase/usuario.service';
import { Usuario } from '../firebase/usuario.model';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title = "Sobre Mim";
  editar = false;
  list: Usuario[];
  constructor( 
    public service: UsuarioService,
    public authService: AuthService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    public router: Router,
    public ngZone: NgZone ) {}

  ngOnInit() {
    this.resetForm();
    this.service.getUserInfo().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Usuario;
      })
    })
  }

  onEdit(info: Usuario) {
    this.service.userData = Object.assign({}, info);
    this.editar = true;
  }

  resetForm(info?: NgForm) {
    if (info != null)
    info.resetForm();
    this.service.userData = {
      id: null,
      nome: '',
      email: '',
      telefone: '',
    }
    this.editar = false;
  }

  onSubmit(info: NgForm) {
    let data = Object.assign({}, info.value);
    delete data.id;
    if (info.value.id == null)
      this.firestore.collection('informacoes').add(data);
    else
      this.firestore.doc('informacoes/' + info.value.id).update(data);
    this.resetForm(info);
    this.toastr.success('Editado com sucesso');
  }

}
