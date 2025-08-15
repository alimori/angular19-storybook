import { Routes } from '@angular/router';
import { ProductsListComponent } from './features/products-list/products-list.component';

export const routes: Routes = [
    // ... your other routes
    {
        path: 'products',
        component: ProductsListComponent,
    },
];

