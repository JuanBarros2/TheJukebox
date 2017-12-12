import { LoginComponent } from './login/login.component';
import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },{
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
