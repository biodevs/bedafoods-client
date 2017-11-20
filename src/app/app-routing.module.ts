import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { RestaurantNewComponent } from './restaurants/restaurant-new/restaurant-new.component';

import { PlatesModule } from './plates/plates.module';
import { PlateListComponent } from './plates/plate-list/plate-list.component';
import { PlateNewComponent } from './plates/plate-new/plate-new.component';
import { PlateEditComponent } from './plates/plate-edit/plate-edit.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'restaurants', component: RestaurantListComponent },
    { path: 'restaurants/new', component: RestaurantNewComponent },
    { path: 'restaurants/:id', component: RestaurantEditComponent },
    { path: 'plates', component: PlateListComponent },
    { path: 'plates/:id', component: PlateEditComponent },
    { path: 'plates/new', component: PlateNewComponent },
    
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}