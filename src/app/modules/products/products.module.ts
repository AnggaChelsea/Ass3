import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from '../../components/product/product.component'
import { ProductsService } from 'src/app/services/products/products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService]

})
export class ProductsModule { }
