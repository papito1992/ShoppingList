import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class ShoppinglistService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5 ),
    new Ingredient('Oranges', 5 )
  ];

  getIngredient1() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient) {
this.ingredients.push(ingredient);
this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients1(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient() {
    return this.ingredients.slice();
  }
  getIngred(index: number) {
    return this.ingredients[index];
  }
  updatgeIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngreadient(index: number) {
    this.ingredients.splice(index, 1);
this.ingredientsChanged.next(this.ingredients.slice());
  }
}
