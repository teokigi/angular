import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './home/customers/customers.component';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { AuthComponent } from './auth/auth.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
    {   path: 'home',
        component: HomeComponent,
        children:[
            { path: 'home/customers', component: CustomersComponent, canActivate:[YourGuardGuard],},
            { path: 'home/contractors', component: ContractorsComponent, canActivate:[YourGuardGuard],},
        ],
    },
    { path: 'auth', component: AuthComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
