import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Account } from '../models/account';

@Injectable()
export class BookmarkService {

  private accounts: Account[] = [];

  constructor() { }

  public loadBookmarkedAccounts() {
    this.accounts = (JSON.parse(
      localStorage.getItem(this.getLocalStorageKey('bookmarkedAccounts'))
    ) || []) as Account[];
  }

  public getBookmarkedAccounts() {
    return this.accounts;
  }

  public isBookmarked(account: Account) {
    return this.accounts.findIndex(
      (acc: Account) => acc.address.toLowerCase() === account.address.toLowerCase()
    ) > -1;
  }

  public bookmarkAccount(account: Account) {
    if (this.isBookmarked(account)) {
      return;
    }

    this.accounts.push(account);
    this.saveBookmarkedAccounts();
  }

  public unbookmarkAccount(account: Account) {
    let index = this.accounts.findIndex(
      (acc: Account) => acc.address.toLowerCase() === account.address.toLowerCase()
    );

    if (index > -1) {
      this.accounts.splice(index, 1);
      this.saveBookmarkedAccounts();
    }
  }

  private saveBookmarkedAccounts() {
    localStorage.setItem(
      this.getLocalStorageKey('bookmarkedAccounts'),
      JSON.stringify(this.accounts)
    );
  }

  private getLocalStorageKey(key) {
    return `${environment.localstorage.prefix}_${key}`;
  }

}
