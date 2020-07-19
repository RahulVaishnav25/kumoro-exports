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
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
    @Input() isAddedToCart:boolean;
    @Input() title;
    @Output() onAddToCart: EventEmitter<any> = new EventEmitter();

    constructor( private modalService: NgbModal) {}

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

    ngOnInit() {    }
    addToCart() {
        this.onAddToCart.emit(null);
    }
}
