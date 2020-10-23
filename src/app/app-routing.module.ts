import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodsComponent } from './components/product/foods/foods.component';


const routes: Routes =
	[


		{ path: 'home', component: HomeComponent },
		{ path: '', redirectTo: '/home', pathMatch: 'full' },
		{ path: 'foods', component: FoodsComponent },
		{
			path: 'product',
			pathMatch: 'full',
			loadChildren: './modules/products/products.module#ProductsModule'
		}

	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
