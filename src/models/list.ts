import { UserLists } from "./userLists";
import { Item } from "./item";

export class List{
    private users: Array<UserLists>;
    private items: Array<Item>;

    constructor(us: Array<UserLists>, it:Array<Item>){
        this.users=us;
        this.items=it;
    }

    addItem(it: Item){
        //add it to items
    }

    deleteItem(it: Item){
        //delete it from items
    }
    
}