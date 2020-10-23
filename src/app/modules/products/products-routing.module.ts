import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../../components/product/product.component';
import { FoodsComponent } from '../../components/product/foods/foods.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: ProductComponent
  },
  {
  path: 'foods', 
  pathMatch:'full',
  component: FoodsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
