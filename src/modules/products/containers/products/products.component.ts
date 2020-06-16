import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
// import { ProductService } from '@modules/products/services';
// import { Product } from '@modules/products/models';
// import { ProductService } from '@common/services/products.service';
import { CartService } from '@common/services/cart.service';
import { Product } from '@common/models';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-products',
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    parentProductId;
    products: Product[];
    sub: Subscription;
    constructor(private cartService: CartService, private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => { this.parentProductId = params['id']; this.refreshContent() });
        // this.parentProductId = this.route.snapshot.paramMap.get('id');
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngOnInit() {

    }

    refreshContent() {
        if (this.parentProductId) {
            this.products = this.cartService.getProductsUnderParent(this.parentProductId);
        }
        else {
            this.products = this.cartService.getProducts();
        }
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        // console.log('added to cart');
        this.refreshContent();
    }
}
