import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
modeEdit: boolean;
modeEdit1 = false;
  constructor(private ActRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.modeEdit1 = params['id'] != null;
      console.log(this.modeEdit1);
    });
  }

}
