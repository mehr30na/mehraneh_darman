import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { PatientService } from './patient/patient.service';
import { ExpenseService } from './expense/expense.service';
import { Typeahead } from 'ng2-typeahead';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PatientComponent } from './patient/patient.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ExpenseComponent } from './expense/expense.component';
import {PersianCalendarService} from "./shared/persinDate/PersianCalendarService";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PatientComponent,
    SpinnerComponent,
    ExpenseComponent,
    Typeahead 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ PatientService , ExpenseService , PersianCalendarService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
