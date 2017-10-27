import { Injectable } from '@angular/core';

import { Account } from '../models/account';

@Injectable()
export class BookmarkService {

  private bookmarkedAccounts: Account[] = [];

  constructor() { }

  public loadBookmarkedAccounts() {
    this.bookmarkedAccounts = [
      { address: '0xD71984e4455186a97A75E0389b42d37393A3B0b2' },
      { address: '0xE94b04a0FeD112f3664e45adb2B8915693dD5FF3' }
    ];
  }

  public getBookmarkedAccounts() {
    return this.bookmarkedAccounts;
  }

}
