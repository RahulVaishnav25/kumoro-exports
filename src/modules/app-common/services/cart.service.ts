import { Injectable } from '@angular/core';
import { Product, Cart, CartItem, ProductsTypes, ParentProducts } from '@common/models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PRODUCTS } from './mock-products';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private http: HttpClient) { }

    getProductsPages(): ParentProducts[] {
        PRODUCTS.forEach(f => {
            f.children.forEach(a => {
                a.childProducts.forEach(b => {
                    b.isAddedToCart = this.isProductInCart(b);
                })
            })
        });
        return PRODUCTS;
    }

    getProductsPage(prodType: ProductsTypes): ParentProducts {
        var ret = null;
        this.getProductsPages().forEach(f => {
            if (f.pageProductType == prodType) {
                ret = f;
            }
        });
        return ret;
    }

    productMatchIdentifier(a, b): boolean {
        return a.id.valueOf() === b.id.valueOf() && a.productType == b.productType
    }

    isProductInCart(product: Product): boolean {
        let retval = false;
        let cart = this.getCart();
        this.getProductsFromCartItems(cart.cartItem).forEach(f => {
            if (this.productMatchIdentifier(f, product)) {
                retval = true;
            }
        })
        return retval
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
        let index = cart.cartItem.findIndex(i => this.productMatchIdentifier(i.product,item.product));
        cart.cartItem[index].qty += 1;
        this.saveCart(cart);
    }
    decQty(item: CartItem) {
        let cart: Cart = this.getCart();
        let index = cart.cartItem.findIndex(i => this.productMatchIdentifier(i.product, item.product));
        cart.cartItem[index].qty = Math.max(cart.cartItem[index].qty - 1, 1);
        this.saveCart(cart);
    }

    deleteItem(item: CartItem) {
        let cart: Cart = this.getCart();
        let index = cart.cartItem.findIndex(i => this.productMatchIdentifier(i.product, item.product));
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


    sendOrder(name, email, specs): Observable<Object> {
        let data = {
            "name": name, "email": email, "specs": specs, "order": this.getCart().cartItem.map(v => {
                return "Product Detail: " + v.product.details + ", Item ID:" + ( '000' + v.product.id).slice(-3) +", Qty:" + v.qty
            })
        };
        return this.http.post("http://13.233.89.111:5000/",data , { responseType: 'text' })

    }
}

// 