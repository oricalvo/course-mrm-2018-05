import { Component } from '@angular/core';
import {DialogService} from './dialog.service';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dialogService: DialogService) {
  }

  async login() {
    const comp = this.dialogService.show(LoginComponent);
    comp.user = "Ori";
    //const user = await comp.onLoginCompleted();
  }
}
