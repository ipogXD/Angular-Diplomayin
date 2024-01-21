import { Injectable } from '@angular/core';
import { samples, sampleTags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOOD_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  public getFoodBySearchTerm(term:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + term);
  }

  public getFoodById(id:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + id)
  }

  public getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  public getAllFoodsByTag(tag:string):Observable<Food[]>{
    let test = tag == "All" ? this.getAll() : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag)
    return test;
  }  
}
