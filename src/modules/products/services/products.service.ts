import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Injectable()
export class ProductService {
    constructor() { }

    getProducts(): Product[] {
        return [
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/71UgC3RX5JL._SL1500_.jpg" }, 
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/71vTrBF1l1L._SL1258_.jpg" },
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/DSC06386.JPG" }, 
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20170907-WA0018.jpg" }, 
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0008.jpg" }, 
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0019.jpg" },
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0022.jpg" },
            { title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0025.jpg" },
        ]
    }
}
