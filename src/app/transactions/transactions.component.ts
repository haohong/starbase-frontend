import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Account } from '../shared/models/account';
import { BookmarkService } from '../shared/services/bookmark.service';

@Component({
  selector: 'stb-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  title = 'Transactions View'
  account: Account = { address: '' };
  bookmarked = false;

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.account.address = params.get('address');
        this.bookmarked = this.bookmarkService.isBookmarked(this.account);
      });
  }

  toggleBookmark() {
    if (this.bookmarked) {
      this.bookmarkService.unbookmarkAccount(this.account);
      this.bookmarked = false;
    } else {
      this.bookmarkService.bookmarkAccount(this.account);
      this.bookmarked = true;
    }
  }

}
