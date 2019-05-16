import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../config/services/auth.service";

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.css']
})

export class VerificarEmailComponent implements OnInit {

  title="Obrigado por se Registrar!"

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}