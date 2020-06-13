import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { CartService } from '@modules/cart/services';
// import { Cart } from '@modules/cart/models';
import { CartService } from '@common/services/cart.service';
import { Cart,Product } from '@common/models';

@Component({
    selector: 'sb-cart',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cart.component.html',
    styleUrls: ['cart.component.scss'],
})
export class CartsComponent implements OnInit {
    constructor(public cartService: CartService) { }
    cart: Cart;
    ngOnInit() {
        this.cart = this.cartService.getCart()
    }
    qtyInc(item){
        this.cartService.incQty(item);
        this.cart = this.cartService.getCart()
    }
    qtyDec(item) {
        this.cartService.decQty(item);
        this.cart = this.cartService.getCart()
    }
    removeFromCart(item) {
        this.cartService.deleteItem(item);
        this.cart = this.cartService.getCart()
    }


}
