import { Item } from "./item";

export class Store {
        private storename: String;
        private storetype: String;
        private address: String;
        private URL: String;
        private lat: String;
        private lng: String;
        private googleid: String;
    
        constructor(public store: String, private type: String, public ad: String, public url: String, public lt: String, public lg: String, public id: String) {
            this.storename = store;
            this.storetype = type;
            this.address = ad;
            this.URL = url;
            this.lat = lt;
            this.lng = lg;
            this.googleid = id;
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
    
       
    }