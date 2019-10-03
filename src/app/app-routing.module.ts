import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PunchInComponent} from "./punch-in/punch-in.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'punch-in', component: PunchInComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
