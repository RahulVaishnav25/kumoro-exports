import { Injectable } from '@angular/core';
import { Product, Cart } from '@common/models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PRODUCTS } from './mock-products';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() { }

    getProducts(): Product[] {
        PRODUCTS.forEach(f=>{
            f.isAddedToCart=this.isProductInCart(f);
        });
        console.log("tmplog", PRODUCTS)
        return PRODUCTS;
    }

    isProductInCart(product: Product): boolean {
        let retval=false;
        this.getCart().products.forEach(f => {
            if (f.id.valueOf() === product.id.valueOf()) {
                retval= true;
            }
        })
        return retval
    }

    getProduct(id: number): Product {
        return this.getProducts().filter(x => x.id.valueOf() === id)[0];
    }

    getCart(): Cart {
        // let cartjs = new Cart();
        let cartjs: Cart = JSON.parse(localStorage.getItem('cart'));
        return cartjs;
    }

    saveCart(cart: Cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    addToCart(product: Product) {
        // let prod: Product = this.getProduct(productId);
        let cart: Cart = this.getCart() || JSON.parse("{}");
        if (!cart.products) {
            cart.products = [product];
        } else {
            this.getCart().products.indexOf(product) === -1 ? cart.products.push(product) : console.log("already added")
        }
        this.saveCart(cart);
    }

    cleanCart() {
        let c = this.getCart()
        c.products = []
        this.saveCart(c);
    }
}
