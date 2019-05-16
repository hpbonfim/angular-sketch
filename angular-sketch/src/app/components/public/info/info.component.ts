import { Component, OnInit } from '@angular/core';
import { InformacoesService } from '../../config/firebase/info.service';
import { Informacoes } from '../../config/firebase/info.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoPublicComponent implements OnInit {
  title = "Sobre Mim";
  list: Informacoes[];
  constructor( public service: InformacoesService ) {}

  ngOnInit() {
    this.loadInfoUser();
  }

  loadInfoUser() {
    this.service.getUserInfo().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Informacoes;
      })
    })
  }
}
