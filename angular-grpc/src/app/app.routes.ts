import { Routes } from '@angular/router';
import { GuardAuthGuardService } from '../core/guard/guard-auth-guard.service';
import { PublicGuardService } from '../core/guard/public-guard.service';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('../login/login.component').then(m => m.LoginComponent),
    canActivate:[PublicGuardService]
  },
  {
    path:'',
    loadComponent: () => import('../page/page.component').then(m => m.PageComponent),
    canActivate: [GuardAuthGuardService],
    children: [
      {
        path:'products',
        loadComponent: () => import('../products/products.component').then(m => m.ProductsComponent),
        canActivate: [GuardAuthGuardService]
      },
      {
        path:'profiles',
        loadComponent: () => import('../profiles/profiles.component').then(m => m.ProfilesComponent),
        canActivate: [GuardAuthGuardService]
      }
    ]
  },
  {
    path:'**',
    loadComponent: () => import('../page-404/page-404.component').then(m => m.Page404Component)

  }

];
