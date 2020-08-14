import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { AuthComponent } from '../auth/auth.component';
import { YourGuardGuard } from '../auth/your-auth.guard';


const routes: Routes = [
    {   path: '',
        component: HomeComponent,
        children:[
            { path: 'customers', component: CustomersComponent, canActivate:[YourGuardGuard],},
            { path: 'contractors', component: ContractorsComponent, canActivate:[YourGuardGuard],},
        ],
    },
    { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
