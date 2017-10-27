import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angular2-qrcode';
import { MomentModule } from 'angular2-moment';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BookmarkService } from './shared/services/bookmark.service';
import { TransactionService } from './shared/services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    QRCodeModule,
    MomentModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [BookmarkService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
