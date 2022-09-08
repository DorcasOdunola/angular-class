import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanActivate {
  constructor (public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = JSON.parse(localStorage.getItem("contact_user") !);
      console.log(user);
      if (!user) {
        this.router.navigate(["/signin"]);
      }
      return true;
  }
  
}
