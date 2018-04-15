import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe','A is simply a test','http://www.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls-recipe.jpg'),
  new Recipe('A Test Recipe','A is simply a test','http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/7/0/TM1C48_super-nachos_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539863868.jpeg')
];
  constructor() { }

  ngOnInit() {
  }

}
