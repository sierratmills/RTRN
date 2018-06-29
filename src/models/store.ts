import { Item } from "./item";

export class Store {
        protected storename: String;
        protected storetype: String;
        protected address: String;
        protected URL: String;
        protected lat: String;
        protected long: String;
        protected products: Array<Item>;
    
        constructor(public store: String, protected type: String, public ad: String, public url: String) {
            this.storename = store;
            this.storetype = type;
            this.address = ad;
            this.URL = url;
            this.lat = '';
            this.long = '';
            this.setLatLongFromAddress();
        }
    
        setProducts() {
            //get products from web and create product objects
        }
    
        makeProductObj(): Item {
            return null;
        }
    
        setLatLongFromAddress() {
    
        }
    
        getStorename(): String {
            return this.storename;
        }
    
        getStoretype(): String {
            return this.storetype;
        }
    
        getAddress(): String {
            return this.address;
        }
    
        getURL(): String {
            return this.URL;
        }
    
        getlat(): String {
            return this.lat;
        }
    
        getlong(): String {
            return this.long;
        }
    
        getproducts(): Array<Item> {
            return this.products;
        }
    }