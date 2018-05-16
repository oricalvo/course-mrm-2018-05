import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;

  constructor(builder: FormBuilder) {
    this.formGroup = builder.group({
      userName: ["", [
        Validators.required,
        // Validators.minLength(5),
      ]]
    })
  }

  save() {
    console.log("VALID", this.formGroup.valid);
    console.log("    userName", this.formGroup.controls.userName.value);
  }
}
