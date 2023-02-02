import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // @Autowired
  // private ProductService productService;

  constructor(private productService: ProductService) { }
  

  allProducts : Product[] = []; 

  



  ngOnInit(): void {
    console.log('salut');
    this.productService.allProductsGetter()
      .subscribe(products => {
        this.allProducts = products;
        console.log('AP: ', this.allProducts);
      });

  }

}
