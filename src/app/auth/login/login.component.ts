import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form){
    const user = new User(form.value.email, form.value.password);
    this.authService.login(user).subscribe((dado) => this.route.navigate(['/artistas']), (erro)=> alert(erro));
  }

  register(){
    this.route.navigate(['/register']);
  }
}
