import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmationDailogComponent } from './common/dailogs/confirmation-dailog/confirmation-dailog.component';



@NgModule({
  declarations: [
    ConfirmationDailogComponent
  ],
  imports: [
    // Angular built in modules - commonly used moduels are stored as shared modules
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // Angular material modules
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmationDailogComponent
  ]
})
export class SharedModule { }
