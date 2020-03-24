import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ErrorComponent } from './GlobalError/error/error.component';


const routes : Routes = [
  { path : '',  redirectTo : '/login', pathMatch : 'full' },
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent },
  { path : 'home', component : HomeComponent },
  { path : 'home/:', component : HomeComponent },
  { path : 'error', component : ErrorComponent},
  { path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
