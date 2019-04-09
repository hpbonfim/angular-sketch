import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})

export class EsqueceuSenhaComponent implements OnInit {
  title="Esqueceu a senha?";
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}