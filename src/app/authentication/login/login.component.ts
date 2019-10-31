import { Theme } from 'src/app/theme-configuration.service';
import { fuseAnimations } from '../../core/animations';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { LoggedInUserService } from '../../core/loggedInUser/logged-in-user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ThemeConfigurationService } from 'src/app/theme-configuration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: fuseAnimations
})


export class LoginComponent implements OnInit {
  message: string;
  loginForm: FormGroup;
  inLoading = false;
  arrayOfThemes: Theme[] = [];
  passwordType = 'password';

  ngOnInit() {
  }

  constructor(public authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private themeConfigService: ThemeConfigurationService,
    private loggedInUserService: LoggedInUserService) {
    this.arrayOfThemes = this.themeConfigService.getArrayThemes();
    this.message = '';
    this.createForm();

  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(username: string, password: string): boolean {
    this.inLoading = true;
    this.inLoading = false;
    this.loggedInUserService.setLoggedInUser(
      {
        id: 1, name: 'Jose Alejandro',
        lastName: 'Concepción', role: 'admin',
        email: "jalejandro2928@gmail.com"
      }
    );
    this.router.navigate(['backend/path1']);
    return false;
  }

  successHandle(data) {
    data.user.token = data.token;
    const dataString = JSON.stringify(data.user);
    localStorage.setItem('user', dataString);
    this.loggedInUserService.setLoggedInUser(data.user);
    this.toastr.success('Usted está logeado en nuestro sistema.', 'Felicidades!', {
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-right'
    });
    this.inLoading = false;
  }

  errorHandle(error) {
    const message = error.error.message ? error.error.message : 'Ha ocurrido un error.';
    this.toastr.error(message, 'Error', {
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-right'
    });
    this.inLoading = false;
  }

}
