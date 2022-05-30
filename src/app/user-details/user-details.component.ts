import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUser } from '../api-user';
import { UserServiseService } from '../user-servise.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user?:ApiUser;

  constructor(private net:HttpClient, private activeRoute:ActivatedRoute,private userservice:UserServiseService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(pram => {
      this.user = this.userservice.getUserById(pram['id']);
      const promise = this.net.get<ApiUser>('https://fakestoreapi.com/users/'+pram['id']).toPromise();
      promise.then((data)=>{
        this.user = data;
        console.log(this.user);
        console.log("Promise resolved with: " + JSON.stringify(data));
      }).catch((error)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      });
      console.log(this.user);

    })
  }

  

}
