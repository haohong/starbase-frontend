import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../shared/models/account';

@Component({
  selector: 'stb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home View';

  model = new Account('');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['transactions', this.model.address]);
  }

}
