import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userid: new FormControl('', {
        validators: [Validators.required],
      }),
      accesscode: this.fb.control('', [Validators.required])
    },
    {validators:[Validators.required], updateOn: 'blur'}
    );
  }

}
