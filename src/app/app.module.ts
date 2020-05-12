import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './component/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [HttpModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
