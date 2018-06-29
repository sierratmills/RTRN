import { User } from "./user";
import { Order } from "./order";

export class OrderHistory{
    private user: User;
    private orders: Array<Order>;

    constructor(us: User, ord: Array<Order>){
        this.user=us;
        this.orders=ord;
    }

    addOrder(o:Order){
        //add order to orders
    }
}