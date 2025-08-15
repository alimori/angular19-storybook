import { Component } from '@angular/core';


export interface Product{
  id: number, name: string, price: number
}
/**
 * Displays a list of products
 * @example <app-product-list></app-product-list>
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  standalone: true 
})
export class ProductsListComponent {


/**
 * Fetches the list of all products.
 * @returns An array of product objects.
 */
getProducts(): Product[] {
  // For demo, returning static sample data
  return [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 20.99 },
    { id: 3, name: 'Product C', price: 15.49 },
  ];
}

/**
 * Fetches detailed information about a single product by its ID.
 * @param productId The unique identifier of the product.
 * @returns The detailed product object or undefined if not found.
 */
getProductDetails(productId: number): Product | undefined {
  // Sample data, ideally from a service or API call
  const products = this.getProducts();
  return products.find(product => product.id === productId);
}
}
