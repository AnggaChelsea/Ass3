import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SigninComponent } from '../user/signin/signin.component';
import { User } from '../../models/user';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    cartProducts = [];
    onCart: boolean;
    cartId: string;
    loadingId: string = '';
    subs: Subscription[] = [];

  username$:Observable<User[]>;

  public jumlah_cart : number;
  cart:any
  constructor(private http:HttpClient, private productService:ProductService,
    public authService:AuthService, private cartService:CartService)
    { this.cartId = this.cartService.cartId;
    if(this.cartId) this.getCartItems(); }

  ngOnInit(): void {

    this.subs.push(
      this.cartService.cartItemChange.subscribe(
        val => {
          if(val) {
            const index = this.cartProducts.findIndex( f => f._id === val._id);
            if(index > -1) {
              this.cartProducts[index] = {...this.cartProducts[index], ...val};
            } else {
              this.cartProducts = [...this.cartProducts, val];
            }
            this.cartService.cartItems.next(this.cartProducts);
          }
        }
      )
    );
    this.subs.push(
      this.cartService.cartItems.subscribe(
        val => {
          this.cartProducts = val || this.cartProducts;
        }
      )
    );
  }


    ngOnDestroy() {
      this.subs.forEach(element => {
        element.unsubscribe();
      });
    }

    trackByItem( index, product) {
      return product._id || null;
    }

    private getCartItems() {
      this.cartService.getCartList().subscribe(
        res => {
          const cartProduct = this.formatCartPanel(res);
          this.cartService.cartItems.next(cartProduct);
        }
      );
    }

    removeItem(product) {
      this.loadingId = product._id;
      this.cartService.removeCartItem(product).then(
        res => this.loadingId = ''
      ).catch(
        err => this.loadingId = ''
      );
    }

    cartQtyChange(type, product) {
      this.loadingId = product._id;
      const prop = type === 'inc' ? 'cartQty' : 'Quantity';
      this.cartService.cartQtyUpdate(product, prop).then(
        res => this.loadingId = ''
      ).catch(
        err => this.loadingId = ''
      );
    }

    private formatCartPanel(res) {
      return res.products.map(m => {
        m['cartQty'] = res.ProductIds.find( f => f.ProductId === m._id).Quantity;
        m.Quantity = m.Quantity - m['cartQty'];
        return m;
      });
    }

    get total () {
      return this.cartProducts.reduce( (t, i) => {
        return t += (i.Price * i.cartQty);
      },0);
    }

    get count() {
      return this.cartProducts.length;
    }

  // toggleCartPopup = (event)=>{
  //   event.preventDefault()
  //   event.stopPropagation()
  //   this.cart=this.cartService.toggleCart()
  //   console.log("data",this.cart);
  //
  //
  // }


}
