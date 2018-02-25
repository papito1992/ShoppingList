import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

ingredients: Ingredient[];
private subscribtion: Subscription;
  constructor(private slS: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.slS.getIngredient();
    this.subscribtion = this.slS.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients; });
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
  onEditItem(index: number) {
this.slS.startedEditing.next(index);
  }

}
