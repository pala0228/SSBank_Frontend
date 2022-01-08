import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
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
    FlexLayoutModule
  ]
})
export class SharedModule { }
