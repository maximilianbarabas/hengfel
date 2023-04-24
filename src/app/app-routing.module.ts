/*
* File: app-routing.module.ts
* Author: Maximilian Barabas
* Copyright: M B
* Group: Szoft_II_N
* Date: 2022-04-18
* Github: https://github.com/maximilianbarabas
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path:'about', component: AboutComponent},
  {path:'github', component: GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
