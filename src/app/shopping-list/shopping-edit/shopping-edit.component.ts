import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../shoppinglist.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slS: ShoppinglistService) { }

  // cia mes klausysimes pakitimu started edidint subjekta, uzkrausim ji inicijuojant ir
  ngOnInit() {
    this.subscription = this.slS.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slS.getIngred(index);
this.slForm.setValue({
  name: this.editedItem.name,
  amount: this.editedItem.amount
});
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slS.updatgeIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slS.addIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe(
    );
  }
  onDeleteItem() {

  }

  onClearItem() {
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slS.deleteIngreadient(this.editedItemIndex);
    this.onClear();

  }
}
