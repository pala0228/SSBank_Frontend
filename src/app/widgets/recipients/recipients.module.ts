import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientsComponent } from './recipients.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: "recipients",
    component: RecipientsComponent
  }
];

@NgModule({
  declarations: [
    RecipientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class RecipientsModule { }
