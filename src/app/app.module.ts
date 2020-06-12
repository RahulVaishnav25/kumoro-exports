import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartService } from '@common/services/cart.service';
import { AuthService } from '@common/services/auth.service';
import { AuthGuard } from '@modules/auth/guards';
// import { CartService } from '@common/services/cart.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
    providers: [CartService,AuthService,AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
