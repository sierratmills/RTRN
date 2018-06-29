import { User } from "./user";
import { OrderHistory } from "./orderHistory";
import { Item } from "./item";

export class Order{
    private user: User;
    private orderHisotry:OrderHistory;
    private items: Array<Item>;
    private orderNumber: String;
    private address: String;
    private payment: String;
    private reciept: String;

    constructor(u:User, oh:OrderHistory, it:Array<Item>, ad:String, pay:String){
        this.user=u;
        this.orderHisotry=oh;
        this.items=it;
        this.address=ad;
        this.payment=pay;
        //create unique order number 
    }

    placeOrder(){

    }

    sendReciept(){

    }
    //other methods
}