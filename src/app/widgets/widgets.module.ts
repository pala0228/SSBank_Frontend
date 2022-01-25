import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { RecipientsModule } from './recipients/recipients.module';
import { PayModule } from './pay/pay.module';
import { LoansModule } from './loans/loans.module';
import { CardsModule } from './cards/cards.module';
import { OffersModule } from './offers/offers.module';
import { SettingsModule } from './settings/settings.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const ROUTES: Routes = [
]

@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    // imported modules
    SharedModule,
    DashboardModule,
    RecipientsModule,
    PayModule,
    LoansModule,
    CardsModule,
    OffersModule,
    SettingsModule
  ],
  exports: [
    WidgetsComponent
  ]
})
export class WidgetsModule { }
