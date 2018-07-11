import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MainService } from './app.main.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app.header.component';
import { NewsFeedComponent } from './app.newsfeed.component';
import { AppLoginComponent } from "./app.login.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'login', component: AppLoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsFeedComponent,
    AppLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
