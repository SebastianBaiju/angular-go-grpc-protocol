import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs';
import { UserService } from '../profiles/service/user.service';
import { SubSink } from 'subsink';
import { User } from '../pkg/user.pb';
import { ImageService } from '../core/service/image.service';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-page',
  imports: [RouterOutlet, RouterLink, NgClass,MatTooltipModule, RouterLinkActive],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  providers:[UserService,ImageService]
})
export class PageComponent implements OnInit{
  public routes = [ {
    name: 'Products',
    icon: 'shopping_basket',
    router: '/products'
  },
  {
    name: 'Profile',
    icon: 'people',
    router: '/profiles'
  }
  ]

  private _cookies =  inject(CookieService);
  private _router =  inject(Router);
  private _user =  inject(UserService);
  private _imageService = inject(ImageService);
  private subs =  new SubSink();

  public openedSidebar = signal(false);
  public userDetails = signal<User | null>(null);
  public imageUrl = signal('');
  public smallScreen = false;

  constructor() {
  }

  logout() {
    this._cookies.deleteAll();
    this._router.navigateByUrl('/');
  }

  ngOnInit() {
    if(window.innerWidth< 1025) {
      this.openedSidebar.set(true);
      this.smallScreen = true;
    }
    const token =  this._cookies.get('token');
    const id = (JSON.parse(atob(token.split('.')[1]))).id;
    this.subs.add(this._user.getUserById(id).subscribe(data=> {
      this.userDetails.set(data);
      if( this.userDetails()?.data &&this.userDetails()?.data?.length !== 0) {
      this.imageUrl.set( this._imageService.createUrl(this.userDetails()?.data ?? new Uint8Array));
      }
    }))
  }

  clickRoute() {
      if(this.smallScreen) {
        this.openedSidebar.set(true);
      }
  }
}
