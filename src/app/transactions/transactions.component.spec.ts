import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QRCodeModule } from 'angular2-qrcode';
import { MomentModule } from 'angular2-moment';

import { MaterialModule } from '../material/material.module';
import { TransactionsComponent } from './transactions.component';

import { BookmarkService } from '../shared/services/bookmark.service';
import { TransactionService } from '../shared/services/transaction.service';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        QRCodeModule,
        MomentModule,
        MaterialModule
      ],
      declarations: [ TransactionsComponent ],
      providers: [
        BookmarkService,
        TransactionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
