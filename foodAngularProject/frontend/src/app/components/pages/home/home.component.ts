import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public foods!: Food[];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((parameters)=>{
      if(parameters['searchTerm']){
        this.foods = foodService.getFoodBySearchTerm(parameters['searchTerm'])
      }
      else{
        this.foods = foodService.getAll();
      }
    })
  }
}
