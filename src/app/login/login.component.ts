import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/authentication/auth.service';
import { appRoutingURL } from '../shared/configs/app-routing-url.config';
import { LoaderService } from '../shared/services/loader/loader.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, LoaderService],
  standalone: false
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginModel: LoginModel;
  userNameRequiredError: string;
  passwordRequiredError: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([
        appRoutingURL.DASHBOARD_PAGE,
      ]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get controls() {
    return this.loginForm.controls;
  }

  isValid() {
    this.userNameRequiredError = '';
    this.passwordRequiredError = '';

    if (!this.controls.userName.value) {
      this.userNameRequiredError = 'userNameRequiredError';
    }
    if (!this.controls.password.value) {
      this.passwordRequiredError = 'passwordRequiredError';
    }

    return !(this.userNameRequiredError || this.passwordRequiredError);
  }

  login() {
    // stop here if form is invalid
    if (this.isValid()) {
      this.loaderService.show();
      this.submitted = true;
      this.loading = true;
      this.loginModel = new LoginModel();
      this.loginModel.userName = this.controls.userName.value;
      this.loginModel.password = this.controls.password.value;
      this.authService.login(this.loginModel);
    }
  }
}
