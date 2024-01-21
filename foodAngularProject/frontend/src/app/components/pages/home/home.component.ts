import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public foods!: Food[];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    let foodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((parameters)=>{
      if(parameters['searchTerm']){
        foodObservable = foodService.getFoodBySearchTerm(parameters['searchTerm'])
      }
      else if(parameters['tag']){
        foodObservable = foodService.getAllFoodsByTag(parameters['tag'])
      }
      else{
        foodObservable = foodService.getAll();
      }
      foodObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      })
    })
  }
}
