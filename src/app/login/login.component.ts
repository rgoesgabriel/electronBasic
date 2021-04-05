import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup
  hasToken!: boolean

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validacoes()
  }

  validacoes() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    })
  }

  fazerLogin() {

  }

}