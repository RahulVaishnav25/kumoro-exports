import { Injectable } from '@angular/core';
import { Product, Cart, CartItem, ProductsTypes, ParentProducts } from '@common/models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PRODUCTS, PARENTPRODUCTS } from './mock-products';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() { }

    getProducts(): Product[] {
        PRODUCTS.forEach(f => {
            f.isAddedToCart = this.isProductInCart(f);
        });
        return PRODUCTS;
    }

    getProductsUnderParent(parentProductId: number): Product[] {
        PRODUCTS.forEach(f => {
            f.isAddedToCart = this.isProductInCart(f);
        });
        return PRODUCTS.filter(f => f.parentProductType == parentProductId);
    }

    isProductInCart(product: Product): boolean {
        let retval = false;
        let cart = this.getCart();
        this.getProductsFromCartItems(cart.cartItem).forEach(f => {
            if (f.id.valueOf() === product.id.valueOf()) {
                retval = true;
            }
        })
        return retval
    }

    getProduct(id: number): Product {
        return this.getProducts().filter(x => x.id.valueOf() === id)[0];
    }

    getCart(): Cart {
        let cartjs: Cart = JSON.parse(localStorage.getItem('cart') || "{}");
        return cartjs;
    }

    saveCart(cart: Cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    incQty(item: CartItem) {
        let cart: Cart = this.getCart();
        let index = cart.cartItem.findIndex(i => i.product.id.valueOf() === item.product.id.valueOf());
        cart.cartItem[index].qty += 1;
        this.saveCart(cart);
    }
    decQty(item: CartItem) {
        let cart: Cart = this.getCart();
        let index = cart.cartItem.findIndex(i => i.product.id.valueOf() === item.product.id.valueOf());
        cart.cartItem[index].qty = Math.max(cart.cartItem[index].qty - 1, 1);
        this.saveCart(cart);
    }

    deleteItem(item: CartItem) {
        let cart: Cart = this.getCart();
        let index = cart.cartItem.findIndex(i => i.product.id.valueOf() === item.product.id.valueOf());
        cart.cartItem.splice(index, 1);
        this.saveCart(cart);
    }

    addToCart(product: Product) {
        let cart: Cart = this.getCart() || JSON.parse("{}");
        if (!cart.cartItem) {
            cart.cartItem = [new CartItem(product, 1)];
        } else {
            this.getProductsFromCartItems(this.getCart().cartItem).indexOf(product) === -1 ? cart.cartItem.push(new CartItem(product, 1)) : console.log("already added")
        }
        this.saveCart(cart);
    }

    cleanCart() {
        let c = this.getCart()
        c.cartItem = []
        this.saveCart(c);
    }


    getProductsFromCartItems(cartItems: CartItem[]): Product[] {
        let tmparr: Product[] = [];
        if (cartItems) {
            cartItems.forEach(element => {
                tmparr.push(element.product);
            });
        }
        return tmparr;
    }

    exgetParentProductTypes(): ProductsTypes[] {
        let prods = this.getProducts();
        let arr: ProductsTypes[] = [];
        prods.forEach(f => { if (arr.indexOf(f.parentProductType) === -1) arr.push(f.parentProductType) })
        return arr;
    }

    getParentProductTypes(): ParentProducts[] {
        return PARENTPRODUCTS;
    }

}
