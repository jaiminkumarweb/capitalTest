import { Component } from '@angular/core';
import {MainService} from "./app.main.service";

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html'
})
export class AppLoginComponent {
  constructor (private _MainService: MainService){
  }

  addTodo(userId: string, pass: string){
  if(userId === 'test' && pass === 'test123') {
    console.log('in');
    window.location.href = '/newsfeed';
  }
  }
}
