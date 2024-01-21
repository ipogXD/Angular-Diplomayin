import { Food } from "./food";

export class CartItem{
    public food!:Food;
    public quantity:number = 1;
    public price:number = 0;

    constructor(food:Food){
        this.food = food;
        this.price = this.food.price;
    }
}