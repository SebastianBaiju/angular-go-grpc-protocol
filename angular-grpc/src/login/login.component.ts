import { CookieService } from 'ngx-cookie-service';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { SubSink } from 'subsink';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatError } from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatButtonModule,MatError],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService,CookieService]
})
export class LoginComponent implements OnDestroy {

  private subs = new SubSink()
  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  public error = signal('');
  constructor() { }
  private _login = inject(LoginService);
  private _cookies =  inject(CookieService);
  private _router =  inject(Router);
  login() {
    this._cookies.delete('token');
    this.error.set('');
    this.subs.add(this._login.login(this.loginForm.value.username , this.loginForm.value.password).subscribe( {next: data => {
      this._cookies.set('token',  data.token);
      this._router.navigateByUrl('/products');
    },
    error: (err)=> {
      this.error.set(err.statusMessage);
    }
  }) )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();

  }

}
