import {Component, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("userNameModel") userNameModel: NgModel;
  @ViewChild("emailModel") emailModel: NgModel;
  @ViewChild("idModel") idModel: NgModel;
  @ViewChild("formModel") formModel: NgForm;
  email: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.formModel);
  }

  save() {
    console.log("forms");
    console.log("    userName", this.userNameModel.model, this.userNameModel.viewModel);
    console.log("    email", this.emailModel.model, this.emailModel.viewModel);
    console.log("    id", typeof this.idModel.model, typeof this.idModel.viewModel);

    if(!this.formModel.valid) {
      console.log("NOT valid");
      return;
    }

    console.log("valid");
  }
}
