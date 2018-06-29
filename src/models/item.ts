import { Store } from "./store";
import { UserCart } from "./userCart";
import { List } from "./list";
import { Order } from "./order";

export class Item {

    private itemtype: String;
    private price: String;
    private URL: String;
    private store: Store;
    private size: String;
    private image: String;
    private carts: Array<UserCart>;
    private list: Array<List>;
    private orders: Array<Order>;

    constructor(public st: Store, public img: String, public pr: String, public url: String,
        public it: String, public sz: String) {
        this.itemtype = it;
        this.price = pr;
        this.URL = url;
        this.store = st;
        this.size = sz;
        this.image = img;
    }

    getItemType(): String {
        return this.itemtype;
    }

    getPrice(): String {
        return this.price;
    }

    getURL(): String {
        return this.URL;
    }

    getStore(): Store {
        return this.store
    }

    getSize(): String {
        return this.size;
    }

    getImage(): String {
        return this.image;
    }
}