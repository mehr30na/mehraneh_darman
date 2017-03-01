import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from "./patient/patient.component";
import {ExpenseComponent} from "./expense/expense.component";
import {ReportComponent} from "./report/report.component";


const routes: Routes = [
  { path: '', children: [] },
  { path:'patient' , component: PatientComponent  },
  { path:'expense' , component: ExpenseComponent  },
  { path:'report' , component: ReportComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
