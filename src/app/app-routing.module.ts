import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllPhotosComponent } from './all-photos/all-photos.component';
const routes: Routes = [
  {path:'user-details\id',component:UserDetailsComponent},
  {path:'all-photos',component:AllPhotosComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo: 'login',pathMatch: 'full'},
  {path:'**',redirectTo:'all-photos',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
