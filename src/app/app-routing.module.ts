import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourGuardGuard } from './auth/your-auth.guard';

const routes: Routes = [
    {   
        path: '',
        loadChildren: './home/home.module#HomeModule',
        canLoad:[ YourGuardGuard ]    
    },
    { path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
