import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css']
})
export class RestaurantNewComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }
  private _restaurant: Restaurant = <Restaurant>{};

  ngOnInit() {
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this._restaurant.id = null;
    this._restaurant.created = new Date();
    this._restaurant.updated = new Date();
    console.log(this._restaurant);
  }
}
