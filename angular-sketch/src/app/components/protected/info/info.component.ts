// IMPORT CONFIG MODULES
import { InformacoesService } from '../../config/firebase/info.service';
import { AuthService } from "../../config/services/auth.service";
import { Informacoes } from '../../config/firebase/info.model';
//IMPORT ANGULAR MODULES
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // WINDOWS ALERT ANIMATIONS
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  SHOW: boolean = false;
  title = "Sobre Mim";
  list: Informacoes[];

  constructor( 
    private service: InformacoesService,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    public router: Router,
    public ngZone: NgZone ) {}

  ngOnInit() {
    this.onStart();
  }

  onStart() {
    this.resetForm();
    this.service.getUserInfo().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Informacoes;
      })
    })
  }

  onEdit(info: Informacoes) {
    this.service.userData = Object.assign({}, info);
    this.SHOW = true;
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

    this.SHOW = false;
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
