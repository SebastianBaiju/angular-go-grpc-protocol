import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class PublicGuardService  implements CanActivate{


  constructor(private _cookies: CookieService, private _router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const token =  this._cookies.get('token');;
    if (!token) {
      return true;
    }

    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    if ((Math.floor((new Date).getTime() / 1000)) >= expiry) {
      this._cookies.delete('token');
      return true;
    }
    this._router.navigateByUrl('/products');
    return false;
  }
}
