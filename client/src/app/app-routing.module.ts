import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from "./patient/patient.component";
import {ExpenseComponent} from "./expense/expense.component";

const routes: Routes = [
  { path: '', children: [] },
  { path:'patient' , component: PatientComponent  },
  { path:'expense' , component: ExpenseComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
