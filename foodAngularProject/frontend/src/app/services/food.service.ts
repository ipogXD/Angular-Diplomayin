import { Injectable } from '@angular/core';
import { samples } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  public getAll(){
    return samples;
  }

  public getFoodBySearchTerm(term:string){
    return this.getAll().filter((food)=>{
      return food.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }
}
