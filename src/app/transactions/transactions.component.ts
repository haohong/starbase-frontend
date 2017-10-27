import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import orderBy from 'lodash/orderBy';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';

import { Account } from '../shared/models/account';
import { BookmarkService } from '../shared/services/bookmark.service';
import { TransactionService } from '../shared/services/transaction.service';

@Component({
  selector: 'stb-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  title = 'Transactions View'
  account: Account = { address: '' };
  bookmarked = false;
  dataSource: TransactionsDataSource;
  displayedColumns = ['timeStamp', 'from', 'to', 'value'];

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.account.address = params.get('address');
        this.bookmarked = this.bookmarkService.isBookmarked(this.account);

        this.subscribeTransactionList();
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

  subscribeTransactionList() {
    this.transactionService.subscribeTransactionList(this.account.address);

    this.dataSource = new TransactionsDataSource(
      this.transactionService.transctions
        .filter(frame => frame.address.toLowerCase() === this.account.address.toLocaleLowerCase())
        .map(frame => orderBy(frame.result, [t => parseInt(t.timeStamp)], ['desc']))
        .scan((acc, orderedTransactions) => {
          acc.unshift(...orderedTransactions);

          return acc;
        }, [])
    );
  }

}

class TransactionsDataSource extends DataSource<any> {

  constructor(private observable: Observable<any[]>) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    return this.observable;
  }

  disconnect() {}
}
