import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientsComponent } from './recipients.component';
import { ViewRecipientsComponent } from './view-recipients/view-recipients.component';
import { AddRecipientComponent } from './view-recipients/add-recipient/add-recipient.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewRecipientCardComponent } from './view-recipient-card/view-recipient-card.component';
import { RecipientDetailsComponent } from './view-recipients/recipient-details/recipient-details.component';
import { RecipientTransactionsComponent } from './view-recipients/recipient-transactions/recipient-transactions.component';
import { RecipientListComponent } from './view-recipients/recipient-list/recipient-list.component';
import { RecipientsRoutingModule } from './recipients-routing.module';


@NgModule({
  declarations: [
    RecipientsComponent,
    ViewRecipientsComponent,
    AddRecipientComponent,
    ViewRecipientCardComponent,
    RecipientDetailsComponent,
    RecipientTransactionsComponent,
    RecipientListComponent
  ],
  imports: [
    CommonModule,
    // imported modules
    SharedModule,
    RecipientsRoutingModule,
  ]
})
export class RecipientsModule { }
