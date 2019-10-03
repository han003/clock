import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder} from "@angular/forms";

@Component({
  selector: 'clock-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private hide: boolean;
  private loginForm: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.hide = true;
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  login(value) {
    console.log(`Pressed login`, value);
  }
}
