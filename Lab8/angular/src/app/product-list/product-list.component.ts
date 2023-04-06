import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories:any = [];

  selectedCategory:any;
  dropdownOpen = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://angular:8000/api/categories').subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(category:any) {
    this.selectedCategory = category;
  }

  removeItem(item:any) {
    const index = this.selectedCategory.items.indexOf(item);
    if (index !== -1) {
      this.selectedCategory.items.splice(index, 1);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
