import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { YourGuardGuard } from './auth/your-auth.guard';

const routes: Routes = [
    {   
        path: 'home',
        loadChildren: './home/home.module',
        canLoad:[ YourGuardGuard ]    
    },
    { path: 'auth', component: AuthComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
