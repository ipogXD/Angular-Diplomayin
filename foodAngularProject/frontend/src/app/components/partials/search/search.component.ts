import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchTerm:string = "";

  constructor(private activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((parameters)=>{
        if(parameters['searchTerm']){
          this.searchTerm = parameters['searchTerm'];
        }
      }
    )
  }

  public searchFood(term:string):void{
    if(term){
      this.router.navigateByUrl("/search/" + term);
    }
  }
}
