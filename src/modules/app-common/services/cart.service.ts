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

    // getProductsUnderParent(parentProductId: number): Product[] {
    //     PRODUCTS.forEach(f => {
    //         f.isAddedToCart = this.isProductInCart(f);
    //     });
    //     return PRODUCTS.filter(f => f.parentProductType == parentProductId);
    // }

    // getProductTypesUnderParent(parentProductId: number): ProductsTypes[] {
    //     let productTypes: ProductsTypes[] = [];
    //     PRODUCTS.forEach(f => {
    //         f.isAddedToCart = this.isProductInCart(f);
    //         if (f.parentProductType == parentProductId) {
    //             if (productTypes.indexOf(f.productType) === -1) productTypes.push(f.productType)
    //         }
    //     });
    //     return productTypes;
    // }



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

    // getProduct(id: number): Product {
    //     return this.getProducts().filter(x => x.id.valueOf() === id)[0];
    // }

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

    // exgetParentProductTypes(): ProductsTypes[] {
    //     let prods = this.getProducts();
    //     let arr: ProductsTypes[] = [];
    //     prods.forEach(f => { if (arr.indexOf(f.parentProductType) === -1) arr.push(f.parentProductType) })
    //     return arr;
    // }

    // getParentProductTypes(): ParentProducts[] {
    //     return PARENTPRODUCTSTYPES;
    // }

    // getChildProductTypeTitle(productType: number): ParentProducts {
    //     let str: ParentProducts;
    //     CHILDPRODUCTSTYPES.forEach(f => {
    //         if (f.parentProductType == productType)
    //             str = f;
    //     })
    //     return str ? str : null;
    // }

    sendOrder(name, email, specs): Observable<Object> {
        return this.http.post("http://127.0.0.1:5000/mail", {
            "name": name, "email": email, "specs": specs, "order": this.getCart().cartItem.map(v => {
                return "Item ID: KE" + (v.product.details+ '000' +  v.product.id).slice(-3) + ", Qty:" + v.qty
            })
        }, { responseType: 'text' })

    }
}
