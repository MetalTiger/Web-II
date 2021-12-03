import { NgModule } from '@angular/core';
import { UiControlsComponent } from './ui-controls.component';
import { CardListComponent } from './card-list/card-list.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    UiControlsComponent,
    CardListComponent
  ],
  imports: [
    CommonModule  // Necesaria para la directiva *ngFor
  ],
  exports: [
    UiControlsComponent,
    CardListComponent
  ]
})
export class UiControlsModule { }
