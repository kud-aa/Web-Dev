import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() items:any;
  @Output() remove = new EventEmitter();

  removeItem(item:any) {
    this.remove.emit(item);
  }

  share(id:number) {
    const item = this.items[id - 1];
    const url = 'https://t.me/share/url?url=' + encodeURIComponent(item.url) + '&text=' + encodeURIComponent(item.name);
    window.open(url, '_blank');
  }
}
