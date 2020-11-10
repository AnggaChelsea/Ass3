import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list:any
  constructor(private cartService:CartService) {
  }
  ngOnInit(): void {
   // this.list= this.cartService.cartListSubject
   // console.log(this.list);

  }


  hapuscart(i){
    this.cartService.removeCart(i)
  }

}
