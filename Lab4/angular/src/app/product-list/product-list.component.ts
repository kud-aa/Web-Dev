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
    const product = products[id - 1];
    const url = 'https://t.me/share/url?url=' + encodeURIComponent(product.url) + '&text=' + encodeURIComponent(product.name);
    window.open(url, '_blank');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
