import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../config/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
