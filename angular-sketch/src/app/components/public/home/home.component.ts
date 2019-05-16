import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomePublicComponent implements OnInit {
  title = 'Hello, world!';
  constructor() { }

  ngOnInit() { }

}
