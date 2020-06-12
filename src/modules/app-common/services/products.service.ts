// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Product } from '@modules/products/models';
// // import { Product } from '../../products/models';

// @Injectable({
//     providedIn: 'root',
// })
// export class ProductService {
//     constructor() {
//         this.products = [
//             { id: 1, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/71UgC3RX5JL._SL1500_.jpg" },
//             { id: 2, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/71vTrBF1l1L._SL1258_.jpg" },
//             { id: 3, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/DSC06386.JPG" },
//             { id: 4, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20170907-WA0018.jpg" },
//             { id: 5, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0008.jpg" },
//             { id: 6, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0019.jpg" },
//             { id: 7, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0022.jpg" },
//             { id: 8, title: "Resin BackFlow Fountain", details: "fountain dhoop stand", imageSrc: "assets/images/fountain/IMG-20180705-WA0025.jpg" },
//         ]
//     }

//     private products: Product[]

//     getProducts():Observable<Product[]> {
//         return  of(this.products)
//     }

//     getProduct(id: number): Observable <Product|null> {
//         console.log("id", id)
//         this.products.forEach(element => {
//             if (element.id === id) {
//                 console.log("sending ", element)
//                 let x: Product = new Product()
//                 x = element;
//                 return of(x);
//             }
//         });
//         return of(null)
//     }



// }
