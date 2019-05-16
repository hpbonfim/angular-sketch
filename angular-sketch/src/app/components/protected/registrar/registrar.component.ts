import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../config/services/auth.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  titleFriend = "Registre seu Amigo"

  constructor( public authService: AuthService ) { }

  ngOnInit() { }

}