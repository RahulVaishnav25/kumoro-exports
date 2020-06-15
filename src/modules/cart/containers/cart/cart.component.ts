import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { CartService } from '@modules/cart/services';
// import { Cart } from '@modules/cart/models';
import { CartService } from '@common/services/cart.service';
import { Cart, Product } from '@common/models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-cart',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cart.component.html',
    styleUrls: ['cart.component.scss'],
})
export class CartsComponent implements OnInit {
    constructor(public cartService: CartService, private modalService: NgbModal) { }
    cart: Cart;
    closeResult = '';
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    ngOnInit() {
        this.cart = this.cartService.getCart()
    }
    qtyInc(item) {
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
