import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor() {}

  // metodo falso
  onLogin() {
    console.log('Login clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
