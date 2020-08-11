import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { YourGuardGuard } from './auth/your-auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'auth', component: AuthComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
