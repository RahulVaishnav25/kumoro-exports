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
    selector: 'sb-product-view',
    // // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './product-view.component.html',
    styleUrls: ['product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, AfterViewInit {
    // imageSource = "assets/img/rahul.png";
    // description = "asdasdasd";
    // title = "tititititiititii";

   @Input() imageSource;
   @Input() description;
   @Input() title;


    constructor() {
    }
    ngAfterViewInit() { }

    ngOnInit() {

    }
}
