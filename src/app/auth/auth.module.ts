import { ServerService } from './../server.service';
import { AuthRoutingModule } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [ServerService],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
