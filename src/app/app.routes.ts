import { Routes } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PythonInterfaceComponent } from './Components/python-interface/python-interface.component';
import { BillingComponent } from './Components/billing/billing.component';

export const routes: Routes = [

    {
        path:"", component:EmployeeComponent
    },
    {
        path:"employee", component: EmployeeComponent
    },
    {
        path:"about-us", component: AboutUsComponent
    },
    {
        path:"billing", component: BillingComponent
    }

];
