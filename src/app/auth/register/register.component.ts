import { User } from './../user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form){
    const user = new User(form.value.email, form.value.password, form.value.username);
    this.authService.registerUser(user)
      .subscribe((dado) => {
        this.redirectToLogin();
      },(erro) => alert(erro));
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }
}
