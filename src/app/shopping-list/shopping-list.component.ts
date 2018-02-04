import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private slS: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.slS.getIngredients();
    this.slS.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients; } );
  }


}
