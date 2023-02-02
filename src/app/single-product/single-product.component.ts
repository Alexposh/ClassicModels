import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private at: ActivatedRoute, private productService : ProductService) { }

    product : Product | null = null;
    getSingleProd(productId : string){
      //go to java and bring prod based on ID
      this.product = new Product();
      if(this.product){
        this.product.productname = "Whatever";
      }
    }
  

  ngOnInit(): void {
    // this.product = new Product();
    this.at.params.subscribe(params => {
      console.log('url param: ', params);
      this.productService.singleProductGetter2(params.id).subscribe(
        rez => {
          
          this.product = rez;
          console.log('produs: ', this.product);
        },err => {
          console.log('ERROR HAPPENED: ', err);
        }
      );
      
    })
  }

}

