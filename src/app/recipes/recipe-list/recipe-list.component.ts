import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('recipe', 'testin tests', 'https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png'),
    new Recipe('test', 'tests s', 'https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png'),
    new Recipe('test', 'test s s s ', 'https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }
}
