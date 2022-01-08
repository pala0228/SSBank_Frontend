import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: "offers",
    component: OffersComponent
  }
]

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OffersModule { }
