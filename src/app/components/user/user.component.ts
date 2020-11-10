import {Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  datauser: Object = {}

    profileform = new FormGroup({
      _id: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
    });

  constructor(private authService:AuthService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    let id =  this.route.snapshot.paramMap.get('_id');
    this.authService.getUserProfile(id).subscribe(res=>{
      this.datauser = res
      console.log("Profile",res);
      this.profileform.setValue({
        _id : res._id,
        email: res.email,
        username: res.username,
        password:''
      })

    })
}
}
