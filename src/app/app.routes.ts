import { Router, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Return } from './return/return';
import { Home1 } from './admin/home1/home1';
import { Edit } from './admin/edit/edit';
import { AdminLogin } from './admin/admin-login/admin-login';
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: '', component: Login},
    {path: 'signup', component: Signup},
    {path: 'return', component: Return},
    {path: 'home1', component:  Home1},
    {path: 'edit', component: Edit},
    {path: 'admin-login', component: AdminLogin}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

