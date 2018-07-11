import { Component } from '@angular/core';
import { MainService } from './app.main.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './app.newsfeed.component.html',
  styleUrls: ['./app.newsfeed.component.css']
})
export class NewsFeedComponent {
     scope: any;

  constructor(private _MainService: MainService)
  {
    this._MainService.getData()
      .subscribe(
        (res) => {
          this.scope = res;
          console.log("scope is = ", this.scope);
        },
        (error) => console.log("error : " + error),
        () => console.log('Error in GetApplication in Login : ' + Error)
      );
  }
}
