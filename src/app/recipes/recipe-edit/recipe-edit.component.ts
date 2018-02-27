import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
modeEdit1 = false;
recipeForm: FormGroup;
  constructor(private ActRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.ActRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.modeEdit1 = params['id'] != null;
      this.initForm();
    });
  }
onSubmit() {
    // const  newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );
if (this.modeEdit1) {
   this.recipeService.updateRecipe(this.id, this.recipeForm.value);
} else {
  this.recipeService.addRecipe(this.recipeForm.value);
}
this.onCancel();
}

  private initForm() {
let  recipeImagePath = '';
let recipeDescription = '';
    let recipeName = '';
    const recipeIngredients = new FormArray([]);
    if (this.modeEdit1) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern('^[1-9]+[0-9]*$')])
          }));
        }
      }
    }
   this.recipeForm = new FormGroup({
     'name': new FormControl(recipeName, Validators.required),
     'imagePath': new FormControl(recipeImagePath, Validators.required),
     'description': new FormControl(recipeDescription, Validators.required),
     'ingredients': recipeIngredients
   });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push( new FormGroup({
     'name': new FormControl(null, Validators.required),
     'amount': new FormControl(null, [Validators.required,
       Validators.pattern('^[1-9]+[0-9]*$')])
    }));
  }

  onCancel() {
this.router.navigate(['../'], {relativeTo: this.ActRoute});
  }

  onDeleteingredient(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }
}
