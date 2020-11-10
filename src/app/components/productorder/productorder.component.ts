import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productorder',
  templateUrl: './productorder.component.html',
  styleUrls: ['./productorder.component.css']
})
export class ProductorderComponent implements OnInit {
  product$: Observable<Product[]>;
  constructor(private http:HttpClient, private cartService:CartService, private productService:ProductService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct();
    console.log(this.product$)
  }

  // addCart(product){
  //  this.cartService.addCart({
  //    product,
  //    quantity:1
  //  })
  // }

}
