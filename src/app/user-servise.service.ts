import { Injectable } from '@angular/core';
import { ApiUser } from './api-user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiseService {
userobj:ApiUser[]=[];
user?:ApiUser;
  constructor(private net:HttpClient) {
    this.net.get<ApiUser[]>('https://fakestoreapi.com/users').subscribe(data => {
      this.userobj = data;

    });

   }
   getAllUsers() {
    return this.userobj;
  }

  getUserById(id?: number) {

    console.log(this.user);
    this.net.get<ApiUser>('https://fakestoreapi.com/users/'+id).subscribe(data => {
      this.user = data;
      return this.user;
    });
    console.log(this.user);

    return this.user;
  }

  getUserByUserPass(u: string, p: string) {
    return this.userobj.find(user => user.username === u && user.password === p);
  }
}
