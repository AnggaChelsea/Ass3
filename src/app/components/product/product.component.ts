import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product$: Observable<Product[]>;

  regis;

  constructor(private http:HttpClient, private productService:ProductService, private cartService: CartService)
  {

  }

  ngOnInit(){
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
