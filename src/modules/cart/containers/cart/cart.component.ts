import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { CartService } from '@modules/cart/services';
// import { Cart } from '@modules/cart/models';
import { CartService } from '@common/services/cart.service';
import { Cart, Product } from '@common/models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare var Email;
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


    // sendEmail(){
    //     Email.send({
    //         SecureToken: "2c78c4e9-de7c-48a1-8961-aa7af2723eb6",
    //         To: 'nekvinder@gmail.com',
    //         From: "kumoroexportsjpr@gmail.com",
    //         Subject: "This is the subject",
    //         Body: "And this is the body"
    //     }).then(
    //         message => alert(message)
    //     );
    // }

    ngOnInit() {
        this.cart = this.cartService.getCart()
        // this.sendEmail();
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
