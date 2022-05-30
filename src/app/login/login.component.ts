import { Component, OnInit } from '@angular/core';
import { Ilogin } from '../ilogin';
import { Router } from '@angular/router';
import { UserServiseService } from '../user-servise.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
user: Ilogin={username:'',password:''}
  constructor(private router: Router, private usersService: UserServiseService) { }
  login(userdata: Ilogin) {
    const u = this.usersService.getUserByUserPass(userdata?.username, userdata?.password)
    u ? this.router.navigateByUrl('/user-details/'+u.id): console.log("no data")
    console.log(userdata)
  }
  login2() {
    
    console.log(this.user)
  }
  ngOnInit(): void {
  }

}
