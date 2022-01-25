import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL_COMPONENTS: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatExpansionModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_COMPONENTS],
  exports: [...MATERIAL_COMPONENTS]
})
export class MaterialModule { }
