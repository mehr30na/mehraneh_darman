import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { SidebarComponent }  from './header/sidebar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
