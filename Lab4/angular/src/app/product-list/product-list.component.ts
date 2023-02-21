import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(id:number) {
    for (let product of products) {
      if(product.id == id) {
        const product_url = product.url + '';
        const text = product.name;
        const url = 'https://t.me/share/url?url=' + encodeURIComponent(product_url) + '&text=' + encodeURIComponent(text);
        window.open(url, '_blank');
        break;
      }
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
