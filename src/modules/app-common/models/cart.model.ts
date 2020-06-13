import { Product } from '@modules/products/models';

export interface Cart {
    cartItem: CartItem[];
}

export class CartItem {
    product: Product;
    qty: number;
    constructor(product: Product, qty: number) {
        this.product = product; this.qty = qty;
    }
}