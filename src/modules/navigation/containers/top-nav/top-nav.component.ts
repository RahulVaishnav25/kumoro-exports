import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationService } from '@modules/navigation/services';
import { CartService } from '@common/services/cart.service';
import { ParentProducts } from '@common/models';

@Component({
    selector: 'sb-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
    isCollapsed: boolean = true;
    constructor(private navigationService: NavigationService, private cartService: CartService) { }
    menuStructure: {
        parentProducts: ParentProducts[];
        // hasChild
    }

    parentProducts: ParentProducts[] = [];

    ngOnInit() {
        this.parentProducts = this.cartService.getProductsPages();
        


    }
    
 scrollWin() {
    window.scrollBy(0, 80000);
}


    toggleSideNav() {
        this.navigationService.toggleSideNav();
    }
}
