import { Food } from "./food";

export class CartItem{
    public food!:Food;
    public quantity:number = 1;
    public price:number = this.food.price;

    constructor(food:Food){
        this.food = food;
    }
}