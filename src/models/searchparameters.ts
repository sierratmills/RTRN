export class SearchParameters{
        protected zipcode:String;
        protected category: String;
        protected lat: String;
        protected long: String;
    
        constructor(zip:String, cat:String){
            this.zipcode = zip;
            this.category = cat;
            this.lat = '';
            this.long = '';
            this.setLatLongFromZip();
        }
    
        setLatLongFromZip(){
           
        }
    
        getZipCode():String{
            return this.zipcode;
        }
    
        getCategory():String{
            return this.category;
        }
    
        getLat():String{
            return this.lat;
        }
    
        getLong():String{
            return this.long;
        }
    
    }