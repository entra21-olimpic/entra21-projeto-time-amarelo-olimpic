import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegurancaService {
  entrou: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> = false;

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean |
    UrlTree |
    Observable<boolean |
      UrlTree> |
    Promise<boolean |
      UrlTree> {
    if (!this.entrou) {
      this.router.navigateByUrl("");
    }
    return this.entrou;
  }
}
