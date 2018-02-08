import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
@Injectable()
export class ShoppinglistService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5 ),
    new Ingredient('Oranges', 5 )
  ];

  getIngredient1() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient) {
this.ingredients.push(ingredient);
this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients1(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredient() {
    return this.ingredients.slice();
  }
}
