import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../shared/models/account';
import { BookmarkService } from '../shared/services/bookmark.service';

@Component({
  selector: 'stb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home View';
  model: Account = { address: '' };
  bookmarkedAccounts: Account[];

  constructor(
    private router: Router,
    private bookmarkService: BookmarkService
  ) { }

  ngOnInit() {
    this.loadBookmarkedAccounts();
  }

  loadBookmarkedAccounts() {
    this.bookmarkedAccounts = this.bookmarkService.getBookmarkedAccounts();
  }

  onSubmit() {
    this.router.navigate(['transactions', this.model.address]);
  }

}
