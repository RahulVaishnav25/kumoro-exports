import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
// import { ProductService } from '@modules/products/services';
// import { Product } from '@modules/products/models';
// import { ProductService } from '@common/services/products.service';
import { CartService } from '@common/services/cart.service';
import { Product, ParentProducts } from '@common/models';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-products',
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    parentProductId;
    showAllProducts: boolean = false;
    products: Product[];
    sub: Subscription;
    productTypesChild: ParentProducts[] = [];
    constructor(private cartService: CartService, private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => { this.parentProductId = params['id']; this.refreshContent() });
        // this.parentProductId = this.route.snapshot.paramMap.get('id');
        this.showAllProducts = this.parentProductId ? false : true;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngOnInit() { }

    refreshContent() {
        this.productTypesChild = [];
        if (this.parentProductId) {
            this.products = this.cartService.getProductsUnderParent(this.parentProductId);
            // console.log("ss",)
            this.cartService.getProductTypesUnderParent(this.parentProductId).forEach(f => {
                let val = this.cartService.getChildProductTypeTitle(f);
                // console.log("asasas",val);
                this.productTypesChild.push(val);

            });

            console.log("aa", this.products, this.productTypesChild);

        }
        else {
            // alert("all")
            this.products = this.cartService.getProducts();
        }
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        // console.log('added to cart');
        this.refreshContent();
    }
}
