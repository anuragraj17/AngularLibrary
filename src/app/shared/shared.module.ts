import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from "ng-sidebar";

@NgModule({
  imports: [
    CommonModule,SidebarModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
