import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

export class AuthForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(''),
      password: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      age: new FormControl(''),
    });
  }
}

@Component({
  selector: 'escola-ti-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  constructor(private http: HttpClient) {}

  form = new AuthForm();

  onSubmit() {
    return this.http.post('http://localhost:3000/api/users', this.form.value);
  }
}
