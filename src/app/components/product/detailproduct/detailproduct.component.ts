import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';




@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  product : any;
  _id:any;
  name:any;
  tumbnail:any;
  gambar:any;
  deskripsi:any;
  kategory:any;
  price:null;
  jumlah:null;
  published:Date

  constructor(private productService:ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('_id')
    this.route.queryParams.subscribe(params=>{
      this.productService.getProductId(this._id)
      .subscribe(data=>{
         this.product=data
         console.log(this.product);
      })
    })

  }

}
