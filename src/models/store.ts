import { Item } from "./item";

export class Store {
        private storename: String;
        private storetype: String;
        private address: String;
        private URL: String;
        private lat: String;
        private lng: String;
        private products: Array<Item>;
    
        constructor(public store: String, private type: String, public ad: String, public url: String, public lt: String, public lg: String) {
            this.storename = store;
            this.storetype = type;
            this.address = ad;
            this.URL = url;
            this.lat = lt;
            this.lng = lg;
        }
    
        setProducts() {
            //get products from web and create product objects
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
            return this.lng;
        }
    
        getproducts(): Array<Item> {
            return this.products;
        }
    }