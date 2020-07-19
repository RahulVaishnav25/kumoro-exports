import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Event } from '../../../models/models';

@Component({
    selector: 'sb-dashboard-charts',
    // // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit {
    constructor() {}
    events: Event[];
    ngOnInit() {
        // this.eventService
        //     .getEvents()
        //     .toPromise()
        //     .then(val => {
        //         this.events = val;
        //         // console.log(val);
        //     });
    }
}
