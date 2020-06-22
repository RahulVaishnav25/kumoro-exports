import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-footer',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html',
    styleUrls: ['footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
