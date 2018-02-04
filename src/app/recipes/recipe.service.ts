import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from '../shopping-list/shoppinglist.service';
@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('Bulviniai blynai', 'Delicious Lithuanian food', 'https://g4.dcdn.lt/images/pix/pizapcom14769103024191-75724861.jpg', [
      new Ingredient('potatoes' , 10), new Ingredient('Eggs', 2), new Ingredient('Onion', 2), new Ingredient('Flour', 0.100)
    ]),
    new Recipe('Šaltibarščiai', 'Perfect food for a hot day', 'https://receptai.patarimupasaulis.lt/images/Sriubos/saltibarsciai.jpg',
      [new Ingredient('Eggs', 2), new Ingredient('Onion', 2), new Ingredient('Flour',  0.100)]),


    new Recipe('Cepelinai', 'Skaniau nei pasakose ', 'https://g3.dcdn.lt/images/pix/cepelinai-64694933.jpg', [ new Ingredient(
      'Eggs', 2), new Ingredient('Onion', 2), new Ingredient('Flour', 0.100)])];
  constructor(private slS: ShoppinglistService) {}

getRecipes() {
    return this._recipes.slice();
  }
  addIngredientsToShoppingListMethod(ingredients: Ingredient[]) {
this.slS.addIngredients1(ingredients);
  }
}
