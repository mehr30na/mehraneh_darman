import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routing } from './app.route';
import { HttpModule, JsonpModule } from '@angular/http';
import { PatientService } from './patient/patient.service'
import { SpinnerComponent } from './shared/spinner.component'






import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { SidebarComponent }  from './header/sidebar.component';
import { PatientComponent }  from './patient/patient.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule, Routing,HttpModule,JsonpModule ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent, PatientComponent,SpinnerComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ PatientService ]
})

export class AppModule { }
