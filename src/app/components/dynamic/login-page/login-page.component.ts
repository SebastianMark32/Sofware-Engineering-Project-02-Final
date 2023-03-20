import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup; 
  constructor(private authService: AuthService){  }

  createFormGroup():FormGroup{
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)])
    })
  }

  ngOnInit():void {
    this.loginForm = this.createFormGroup();
  }
  login(): void{
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe();
  }

}
