import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailproductComponent } from './components/product/detailproduct/detailproduct.component';


import { AuthGuard } from './services/auth/auth.guard';

import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {
      path: '',
      component:HomeComponent,
  },
  {
    path:'banner',
    component:BannerComponent,
  },
  {
    path: 'signin',
    component:SigninComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'checkout/:id',
    component:CheckoutComponent, canActivate:[AuthGuard]
  },

  {
    path:'user/:_id',
    component:UserComponent,
  },

  {
    path:'product/:id',
    component:DetailproductComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
