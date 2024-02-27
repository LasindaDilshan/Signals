import { Component, computed, effect, signal } from '@angular/core';
import { Product } from '../shopping-item/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css',
})
export class ShoppingItemComponent {
  products: Product[] = [
    { id: 1, name: '1 product', price: 1 },
    { id: 2, name: '2 product', price: 2 },
    { id: 3, name: '3 product', price: 3 },
    { id: 4, name: '4 product', price: 4 },
    { id: 5, name: '5 product', price: 5 },
  ];

  shoppingItems = signal<Product[]>([]);
  totalValue = computed(() =>
    this.shoppingItems().reduce((sum, item) => sum + item.price, 0)
  );
  constructor() {
    effect(() => console.log(this.shoppingItems()));
  }
  addToCart(product: Product) {
    this.shoppingItems.update((shoppingItems) => [...shoppingItems, product]);
  }
  deletefromCart(product: Product) {
    this.shoppingItems.set(this.shoppingItems().filter((i) => i !== product));
    // this.shoppingItems.update((shoppingItems) =>
    //   this.shoppingItems().filter((i) => i !== product)
    // );
  }
  editProduct(product: Product) {
    product.name = 'Edit Product';
    product.price = 25;
  }
}
