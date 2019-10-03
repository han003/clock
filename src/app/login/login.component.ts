import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'clock-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private username: string;
  private password: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(this.username, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ])
    })
  }

  login(form: FormGroup) {
    console.log(`Pressed login`, form);

    if (form.valid) {
      console.log(`form is valid`, );
    }
  }
}