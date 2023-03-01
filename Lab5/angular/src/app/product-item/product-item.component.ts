import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  products = products;

  share(id:number) {
    const product = products[id - 1];
    const url = 'https://t.me/share/url?url=' + encodeURIComponent(product.url) + '&text=' + encodeURIComponent(product.name);
    window.open(url, '_blank');
  }
}
