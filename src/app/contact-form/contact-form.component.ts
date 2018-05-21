import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidators.CannotContainSpace, UsernameValidators.shouldbeUnique]),
      password: new FormControl()
    })

  });
  constructor() { }

  ngOnInit() {
  }
  login() {
    // this.form.setErrors({
    //   invalidLogin: true
    // });
  }
  get username() {
    return this.form.get('username');
  }
  submitForm(f) {
    console.log(f);
  }
  log(x) {
    console.log(x);
  }
}
