import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { TransactionsComponent } from './transactions/transactions.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions/:address', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
