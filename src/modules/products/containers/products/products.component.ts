import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '@common/services/cart.service';
import { Product, ParentProducts, ProductsTypes } from '@common/models';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sb-products',
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    parentProductId;
    showAllProducts: boolean = false;
    products: Product[];

    isSearching: boolean = false;
    pageProducts: ParentProducts;
    sub: Subscription;
    // productTypesChild: ParentProducts[] = [];
    constructor(private cartService: CartService, private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => {
            this.parentProductId = params['id'];
            this.refreshContent()
        });
        this.showAllProducts = this.parentProductId ? false : true;
        if(this.showAllProducts){
            this.fillAllProducts();
        }
    }

    searchForm = new FormGroup({
        search: new FormControl('', Validators.required),
    });

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    scrollWin() {
        window.scrollBy(0, -80000);
    }

    ngOnInit() { }

    search() {
        this.isSearching = true;
        let searchTerm: string = this.searchForm.get("search").value.toLowerCase();
        this.products = this.products.filter(v => v.title.toLowerCase().indexOf(searchTerm) > -1 || v.details.toLowerCase().indexOf(searchTerm) > -1);
    }

    fillAllProducts() {
        this.isSearching = false;
        let arr = [];
        this.cartService.getProductsPages().forEach(f => {
            f.children.forEach(x => { x.childProducts.forEach(a => { arr.push(a) }) })
        });
        this.products = arr;
    }

    refreshContent() {
        // this.productTypesChild = [];
        this.pageProducts = this.cartService.getProductsPage(this.parentProductId);

        // this.pageProducts.
        // if (this.parentProductId) {
        //     this.products = this.cartService.getProductsUnderParent(this.parentProductId);
        //     this.cartService.getProductTypesUnderParent(this.parentProductId).forEach(f => {
        //         let val = this.cartService.getChildProductTypeTitle(f);
        //         this.productTypesChild.push(val);
        //     });
        //     console.log("aa", this.products, this.productTypesChild);
        // }
        // else {
        //     this.products = this.cartService.getProducts();
        // }
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.refreshContent();
    }
}
