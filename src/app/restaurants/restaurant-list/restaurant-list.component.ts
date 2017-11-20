import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant.model';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurant: Restaurant = {
    id: 1,
    name: 'Caçarola',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus rhoncus nibh pellentesque maximus sit amet a diam. Donec cursus felis ipsum. Suspendisse justo arcu, malesuada quis dignissim et, feugiat quis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a lacus sollicitudin, interdum mauris interdum, viverra nibh. Donec interdum vestibulum posuere. Vivamus vitae accumsan mi, tincidunt efficitur ex. Vestibulum semper tortor eget mauris semper luctus. Suspendisse consectetur ultrices massa, vel imperdiet augue finibus et.',
    created: new Date(),
    updated: new Date()
  }
  constructor() { }

  ngOnInit() {
  }

}
