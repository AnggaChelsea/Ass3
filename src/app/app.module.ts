//angular server
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//module
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductComponent } from './components/product/product.component';
import { PakaianComponent } from './components/product/pakaian/pakaian.component';
import { MainanComponent } from './components/product/mainan/mainan.component';
import { MedicineComponent } from './components/product/medicine/medicine.component';
import { EbookComponent } from './components/product/ebook/ebook.component';
import { FoodsComponent } from './components/product/foods/foods.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    NotfoundComponent,
    ProductComponent,
    PakaianComponent,
    MainanComponent,
    MedicineComponent,
    EbookComponent,
    FoodsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
