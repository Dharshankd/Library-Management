import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Return } from './return/return';
import { Home1 } from './admin/home1/home1';
import { Edit } from './admin/edit/edit';
import { AdminLogin } from './admin/admin-login/admin-login';



export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'login', component: Login},
    {path: '', component: Signup},
    {path: 'return', component: Return},
    {path: 'home1', component:  Home1},
    {path: 'edit', component: Edit},
    {path: 'admin-login', component: AdminLogin}
    
]
