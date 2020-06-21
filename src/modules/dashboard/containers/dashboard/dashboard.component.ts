import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-dashboard',
    // // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor() {}
isActive:boolean=false;
    ngOnInit() {
        setTimeout(() => {
            if (!localStorage.getItem('cookieBannerDisplayed'))
            // document.querySelector('cookie-container').classList.add('active');
            this.isActive=true;
        }, 2000);
    }
    

    cookieAccept(){
        // document.querySelector('cookie-container').classList.remove('active');
        this.isActive=false;
        localStorage.setItem('cookieBannerDisplayed', 'true');
    }
}
