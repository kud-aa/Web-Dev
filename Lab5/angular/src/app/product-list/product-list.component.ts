import { Component } from '@angular/core';

import { categories } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories = categories;

  selectedCategory:any;
  dropdownOpen = false;

  selectCategory(category:any) {
    this.selectedCategory = category;
  }

  removeItem(item:any) {
    const index = this.selectedCategory.products.indexOf(item);
    if (index !== -1) {
      this.selectedCategory.products.splice(index, 1);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
