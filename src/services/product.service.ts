import { Injectable } from "@angular/core";
import { StoreSitePage } from "../pages/store-site/store-site";
import { Store } from "../models/store";

@Injectable()
export class ProductService {
    private stores: Array<Store>;

    constructor(){
        this.stores = [];

        var productService = new ProductService();
        this.stores = this.getAllProducts();
    }

    getAllProducts() {
        return this.stores;
    }
}