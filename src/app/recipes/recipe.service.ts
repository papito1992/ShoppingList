import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('recipe', 'testin tests', 'https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png',[]),
    new Recipe('test', 'tests s', 'https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png',[]),
    new Recipe('test', 'test s s s ', 'https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png',[])
  ];

getRecipes() {
    return this._recipes.slice();
  }
}
