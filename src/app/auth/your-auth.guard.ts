import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class YourGuardGuard implements CanLoad, CanActivate {
    
    constructor(private router:Router){

    }
    
    canLoad(route: Route): boolean{
        const url: string = route.path;
        console.log('Url:' + url)

        return true;
    }
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean
        {
        return true;
        }
  
    
  
}
