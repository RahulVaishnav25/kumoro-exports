import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { ProductService } from '@modules/products/services';
// import { Product } from '@modules/products/models';
// import { ProductService } from '@common/services/products.service';
import { CartService } from '@common/services/cart.service';
import { Product } from '@common/models';

@Component({
    selector: 'sb-products',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss'],
    // providers: [ProductService, CartService]
})
export class ProductsComponent implements OnInit {
    constructor(private cartService: CartService) {}
    products: Product[];
    ngOnInit() {
        this.products = this.cartService.getProducts();
        // this.cartService.addToCart(2);
        
    }

    addToCart(product:Product) {
        this.cartService.addToCart(product);
        console.log('added to cart');
        this.products = this.cartService.getProducts();
    }
}
