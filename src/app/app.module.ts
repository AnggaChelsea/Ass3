import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './services/cart.service';
// import { MaterialModule } from './material/material.module';

//service
import { AuthService  } from './services/auth/auth.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthInterceptor } from './services/auth/auth.interceptor';
//component
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';


import { InputProductComponent } from './components/input-product/input-product.component';
import { ProductComponent } from './components/product/product.component';
import { DetailproductComponent } from './components/product/detailproduct/detailproduct.component';
import { CommentsComponent } from './components/user/comments/comments.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductorderComponent } from './components/productorder/productorder.component';
import { AuthModule } from './routes/auth/auth.module';
import { ProductModule } from './routes/product/product.module';
import { CallactionComponent } from './components/callaction/callaction.component';
import { LengkapiprofileComponent } from './components/user/lengkapiprofile/lengkapiprofile.component';

@NgModule({
  declarations: [AppComponent, SigninComponent,SignupComponent,BannerComponent, HeaderComponent, FooterComponent, CartComponent,  UserComponent,InputProductComponent, DetailproductComponent, HomeComponent, CommentsComponent, ProductComponent, CheckoutComponent, ProductorderComponent, CallactionComponent, LengkapiprofileComponent],
  imports: [BrowserModule,  AppRoutingModule, BrowserAnimationsModule, FormsModule,
    HttpClientModule, ReactiveFormsModule, AuthModule, ProductModule, ],
  providers: [ProductService,AuthGuard , CartService, AuthService, UserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
