import { Component, OnInit } from '@angular/core';
import { ProductLine } from '../models/product-line';
import { ProductLineService } from '../services/product-line.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private productLineService: ProductLineService) { }

  productLines: ProductLine[]=[];



  ngOnInit(): void {
    this.productLineService.allProductLinesGetter()
      .subscribe(productLinesResult => {
        this.productLines = productLinesResult;
        
        console.log('ProductLines Resulted: ', this.productLines);
     
      });
  }

}
