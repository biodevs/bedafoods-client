import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateListComponent } from './plate-list/plate-list.component';
import { PlateNewComponent } from './plate-new/plate-new.component';
import { PlateEditComponent } from './plate-edit/plate-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlateListComponent, PlateNewComponent, PlateEditComponent]
})
export class PlatesModule { }
