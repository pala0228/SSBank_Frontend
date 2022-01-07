import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { OpenAccountComponent } from './open-account/open-account.component';



@NgModule({
  declarations: [
    AccountComponent,
    OpenAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
