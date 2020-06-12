import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    Input,
} from '@angular/core';

@Component({
    selector: 'sb-cart-view',
    // // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cart-view.component.html',
    styleUrls: ['cart-view.component.scss'],
})
export class CartViewComponent implements OnInit, AfterViewInit {
    constructor() {
    }
    ngAfterViewInit() { }

    ngOnInit() {

    }
}
