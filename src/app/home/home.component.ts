import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home View';

  model = {
    address: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
