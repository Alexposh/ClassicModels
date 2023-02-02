import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-product-line',
  templateUrl: './products-product-line.component.html',
  styleUrls: ['./products-product-line.component.css']
})
export class ProductsProductLineComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let productLineName = params['product-line-name'];
      console.log('product line name: ', productLineName);
      this.productService.productsByProductLine(productLineName).subscribe(
        result =>{
          console.log('products for current product line: ', result);
        }
      )
    })
  }

}
