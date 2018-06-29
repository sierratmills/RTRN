import { Store } from "./store";

export class Item {

    protected itemtype: String;
    protected price: String;
    protected URL: String;
    protected store: Store;
    protected size: String;
    protected image: String;

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