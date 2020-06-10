import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Injectable()
export class ProductService {
    constructor() { }

    getProducts(): Product[] {
        return [
            { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" }, 
            { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" },
             { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" }, 
             { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" }, 
             { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" }, 
             { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" }, { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" }, { title: "asass", details: "asfadgfaegf", imageSrc: "assets/img/rahul.png" },
        ]
    }
}
