import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'KE-home',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
