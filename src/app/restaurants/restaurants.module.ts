import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestaurantListComponent, RestaurantEditComponent]
})
export class RestaurantsModule { }
