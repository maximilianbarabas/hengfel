/*
* File: app.module.ts
* Author: Maximilian Barabas
* Copyright: M B 
* Group: Szoft_II_N
* Date: 2022-04-18
* Github: https://github.com/maximilianbarabas
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
