import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service'
@Component({
  selector: 'app-barra-nav-auth',
  templateUrl: './barra-nav-auth.component.html',
  styleUrls: ['./barra-nav-auth.component.css']
})
export class BarraNavAuthComponent implements OnInit {

  constructor(
    public service:AuthService
    ) { }

  ngOnInit() {
  }

  SignOut(){
    this.service.SignOut();
  }
}
