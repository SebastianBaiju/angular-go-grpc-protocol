import {  Role, UserSearchResult } from './../pkg/user.pb';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfilesCardComponent } from "./profiles-card/profiles-card.component";
import {
  MatBottomSheet,
  MatBottomSheetConfig,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { SearchComponent, SuggestedList } from "../core/widget/search/search.component";
import { UserService } from './service/user.service';
import { SubSink } from 'subsink';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserSearchListRequest, ListUserRequest, UserListResponse, CreateUserRequest, UpdateUserRequest, DeleteUserRequest } from '../pkg/user.pb';
@Component({
  selector: 'app-profiles',
  imports: [MatButtonModule, ProfilesCardComponent, MatBottomSheetModule, MatPaginatorModule, SearchComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss',
  providers:[UserService]
})
export class ProfilesComponent {
  private _bottomSheet = inject(MatBottomSheet);
  private config: MatBottomSheetConfig = {
    disableClose: true,
  };
   private subs =  new SubSink();
    public search = new BehaviorSubject<UserSearchListRequest>(new UserSearchListRequest({
      name: ''
     }));

  public userList = signal<UserDetails[]>([]);
  public userSuggestionList = signal<SuggestedList[]>([]);
  public limit = signal(10);
  public offset = signal(0);
  public searchValue = signal('');
  public count = signal(0);
  constructor() { }

  public _usersService = inject(UserService);
  private _toaster = inject(ToastrService);

  ngOnInit() {
   this.getUserList();
   this.searchConnectionInit();

  }
  openBottomSheet(editData?: UserDetails) {
    if(editData) {
      this.config = {
        disableClose: true,
        data: editData
      };
    } else {
      this.config = {
        disableClose: true
      };
    }

    const bottom = this._bottomSheet.open(AddProfileComponent, this.config).afterDismissed().subscribe(result => {
      if(result.status) {
        this.getUserList();
      }
      bottom.unsubscribe();
    });
  }

   // bidirectional communication
  searchConnectionInit() {
    this.subs.add(this._usersService.searchData(this.search).subscribe((data:UserSearchResult)=> {
      this.userSuggestionList.set(data.search ?? []);
     }));
  }

  getUserList() {
    const listRequest =  new ListUserRequest( {
        limit: this.limit().toString(),
        offset: this.offset().toString(),
        name: this.searchValue()
    })
    this.subs.add(this._usersService.userList(listRequest).subscribe((data:UserListResponse)=> {
      this.userList.set(data.users ?? []);
      this.count.set(+data.count);
     }))
  }

  page(event: PageEvent) {
    this.limit.set(event.pageSize);
    this.offset.set(event.pageIndex * this.limit());
    this.getUserList();

  }


  deleteUser(eventValue: string ){
    const id = new DeleteUserRequest ({
      id: eventValue
    })
    this.subs.add(this._usersService.deleteUser(id).subscribe({next: data=> {
      this._toaster.success(data.value ?? '');
      this.getUserList();
    }, error: err => {
      this._toaster.error(err.statusMessage ?? '');
    }}));
  }

  searchFinished(event: string) {
    this.searchValue.set(event);
    this.getUserList();
  }
  searchUser(name: string){
    this.search.next(new UserSearchListRequest({
      name: name
     }));
  }
  ngOnDestroy () {
    this.subs.unsubscribe();
  }
  }

  export interface UserDetails {
    id?: string | null;
    name: string | null;
    role:Role | undefined;
    data?:Uint8Array | null;
    filename?: string | null;
    username?: string | null;
  }
