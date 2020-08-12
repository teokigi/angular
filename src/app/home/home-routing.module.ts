import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';

import { YourGuardGuard } from '../auth/your-auth.guard';


const routes: Routes = [
    {   path: 'home',
        component: HomeComponent,
        children:[
            { path: 'home/customers', component: CustomersComponent, canActivate:[YourGuardGuard],},
            { path: 'home/contractors', component: ContractorsComponent, canActivate:[YourGuardGuard],},
        ],
    },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
