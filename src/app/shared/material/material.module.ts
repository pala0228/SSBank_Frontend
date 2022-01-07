import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const MATERIAL_COMPONENTS: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_COMPONENTS],
  exports: [...MATERIAL_COMPONENTS]
})
export class MaterialModule { }
