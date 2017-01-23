import { RouterModule } from '@angular/router';

import { PatientComponent }  from './patient/patient.component';

export const Routing = RouterModule.forRoot([
    {path:'patient' , component: PatientComponent},
]);
