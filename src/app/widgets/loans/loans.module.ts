import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: "loans",
    component: LoansComponent
  }
]

@NgModule({
  declarations: [
    LoansComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class LoansModule { }
