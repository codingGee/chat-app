import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { JoinComponent } from './join/join.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    Component,
    JoinComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'join', component: JoinComponent},
    ]),
  ],
  providers: [],
  bootstrap: [Component]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
