import { User } from "./user";
import { Item } from "./item";

export class UserCart{
    private user: User;
    private items: Array<Item>;

    constructor(public us: User, public it: Array<Item>){
        this.user = us;
        this.items = it;
    }

    addItemToCart(it: Item){
        //add item to cart
    }

    removeItemFromCart(it: Item){
        //remove item from cart
    }
}