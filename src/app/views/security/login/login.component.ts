import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userTag: new FormControl('', {
        validators: [Validators.required],
      }),
      accesscode: this.fb.control('', [Validators.required])
    },
      { validators: [Validators.required], updateOn: 'blur' }
    );
  }

  login() {
    this.loginService.handleLogin(this.form.value).subscribe(result => {
      console.log(result);
    },
      error => {
        console.log('deu merda');
      }
    );
  }

}
