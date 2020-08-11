import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './home/customers/customers.component';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'home/customers', component: CustomersComponent},
    { path: 'home/contractors', component: ContractorsComponent},
    { path: 'auth', component: AuthComponent},
    { path: '', redirectTo: '/home-component', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
