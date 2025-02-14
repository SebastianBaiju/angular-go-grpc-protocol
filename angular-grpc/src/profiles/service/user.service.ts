import { GetUserRequest, Role, RoleRequest } from './../../pkg/user.pb';
import { Injectable } from '@angular/core';
import { UserServiceClient } from '../../pkg/user.pbsc';
import { CreateUserRequest, DeleteUserRequest, ListUserRequest, UpdateUserRequest, UserSearchListRequest } from '../../pkg/user.pb';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private userPb: UserServiceClient,
  ) { }


    createUser(detail: CreateUserRequest){
      return this.userPb.createUser(detail);
    }

    updateUser(detail: UpdateUserRequest){
      return this.userPb.updateUser(detail);
  }

    deleteUser(id: DeleteUserRequest) {
      return this.userPb.deleteUser(id);
    }

      userList(data: ListUserRequest) {
        return this.userPb.listUser(data);
      }

      roleList() {
        return this.userPb.listRole(new RoleRequest);
      }

      getUserById(userId: string) {
        const userIdReq = new GetUserRequest({
          id: userId
        })
        return this.userPb.getUser(userIdReq);
      }

  // biDirectional call example
  searchData(request: Observable<UserSearchListRequest> ) {
    return this.userPb.userListSearch (request)
   }

}
