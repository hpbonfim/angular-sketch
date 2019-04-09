import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/components/firebase/usuario.service';
import { Usuario } from 'src/app/components/firebase/usuario.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoPublicComponent implements OnInit {
  title = "Sobre Mim";
  list: Usuario[];
  constructor( public service: UsuarioService ) {}

  ngOnInit() {
    this.loadInfoUser();
  }

  loadInfoUser() {
    this.service.getUserInfo().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Usuario;
      })
    })
  }
}
