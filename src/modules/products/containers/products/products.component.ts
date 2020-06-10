import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '@modules/products/services';
import { Product } from '@modules/products/models';

@Component({
    selector: 'sb-products',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss'],
})
export class ProductsComponent implements OnInit {
    constructor(private productService: ProductService) { }
    products: Product[];
    ngOnInit() {
        this.products = this.productService.getProducts()
    }
}
