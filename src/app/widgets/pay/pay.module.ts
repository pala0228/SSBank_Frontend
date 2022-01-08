import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: "transfer-funds",
    component: PayComponent
  }
];

@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PayModule { }
