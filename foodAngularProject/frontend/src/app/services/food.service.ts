import { Injectable } from '@angular/core';
import { samples, sampleTags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

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

  public getFoodById(id:string):Food{
    return this.getAll().find((food:Food)=>food.id == id) ?? new Food();
  }

  public getAllTags():Tag[]{
    return sampleTags;
  }

  public getAllFoodsByTag(tag:string):Food[]{
    let test = tag == "All" ? this.getAll() : this.getAll().filter((food)=>{
      return food.tags?.map(tag=>tag.toLocaleLowerCase())?.includes(tag.toLocaleLowerCase())
    })
    console.log(test);
    return test;
  }  
}
