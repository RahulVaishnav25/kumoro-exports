import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    Input,
    Injector,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'sb-product-view',
    // // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './product-view.component.html',
    styleUrls: ['product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
    // imageSource = "assets/img/rahul.png";
    // description = "asdasdasd";
    // title = "tititititiititii";

    @Input() productId;
    @Input() imageSource;
    @Input() description;
    @Input() title;
    @Output() onAddToCart: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {    }
    addToCart() {
        this.onAddToCart.emit(null);
    }
}
