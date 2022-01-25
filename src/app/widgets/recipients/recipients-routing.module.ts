import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipientsComponent } from './recipients.component';
import { ViewRecipientsComponent } from './view-recipients/view-recipients.component';


const ROUTES: Routes = [
  {
    path: "recipients",
    component: RecipientsComponent
  },
  {
    path: "view-recipients",
    component: ViewRecipientsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RecipientsRoutingModule { }
