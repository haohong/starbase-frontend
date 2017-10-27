import { Component, OnInit } from '@angular/core';

import { BookmarkService } from './shared/services/bookmark.service';

@Component({
  selector: 'stb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ethereum Transactions Finder';

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.bookmarkService.loadBookmarkedAccounts();
  }
}
