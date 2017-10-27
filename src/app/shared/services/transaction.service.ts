import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/dom/webSocket';

import { environment } from '../../../environments/environment';

const WEBSOCKET_URL = 'ws://localhost:8080/chat';

@Injectable()
export class TransactionService {

  private ws: Subject<any>;
  public frames: Observable<any>;
  public subscriptions: Observable<any>;
  public transctions: Observable<any>;

  constructor() {
    this.ws = Observable.webSocket(environment.etherscan.websocketUrl);

    const hot = this.ws.publish();
    hot.connect();

    this.frames = hot as Observable<any>;
    this.subscriptions = hot.filter(frame => frame.event === 'subscribe-txlist');
    this.transctions = hot.filter(frame => frame.event === 'txlist');

    const timer = setInterval(() => {
      this.ping();
    }, environment.etherscan.pingInterval * 1000);
  }

  ping() {
    this.ws.next(JSON.stringify({
      event: 'ping'
    }));
  }

  subscribeTransactionList(address: String) {
    this.ws.next(JSON.stringify({
      event: 'txlist',
      address
    }));
  }

}
