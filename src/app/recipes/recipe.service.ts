import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from '../shopping-list/shoppinglist.service';
import {Injectable} from '@angular/core';
@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Bulviniai blynai', 'Delicious Lithuanian food', 'https://g4.dcdn.lt/images/pix/pizapcom14769103024191-75724861.jpg', [
      new Ingredient('potatoes' , 10), new Ingredient('Eggs', 2), new Ingredient('Onion', 2), new Ingredient('Flour', 555)
    ]),
    new Recipe('Šaltibarščiai', 'Perfect food for a hot day', 'https://receptai.patarimupasaulis.lt/images/Sriubos/saltibarsciai.jpg',
      [new Ingredient('Eggs', 2), new Ingredient('Onion', 2), new Ingredient('Flour',  666)]),


    new Recipe('Cepelinai', 'Skaniau nei pasakose ', 'https://g3.dcdn.lt/images/pix/cepelinai-64694933.jpg', [ new Ingredient(
      'Eggs', 2), new Ingredient('Onion', 2), new Ingredient('Flour', 777)])];
  constructor(private slS: ShoppinglistService) {}

getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingListMethod(ingredients: Ingredient[]) {
this.slS.addIngredients1(ingredients);
  }
}
