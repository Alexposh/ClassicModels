import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsProductLineComponent } from './products-product-line/products-product-line.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'product-single/:id',
    component: SingleProductComponent
  },
  {
    path: 'product-all',
    component: ProductsComponent
  },
  {
    path: 'customer-all',
    component: ProductsComponent
  },
  {
    path : 'customer-single/:name',
    component: SingleProductComponent
  },
  {
    path : 'employee-all',
    component: SingleProductComponent
  },
  {
    path : 'employee-single/:name',
    component: SingleProductComponent
  },
  {
    path : 'products/:product-line-name',
    component: ProductsProductLineComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
