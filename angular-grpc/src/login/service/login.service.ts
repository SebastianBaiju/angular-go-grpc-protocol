import { Injectable } from '@angular/core';
import { AuthenticationServiceClient } from '../../pkg/auth.pbsc';
import { LoginRequest } from '../../pkg/auth.pb';

@Injectable()
export class LoginService {

  constructor(    private loginClient: AuthenticationServiceClient) { }


    public  login(name: string| undefined | null, password: string | undefined | null) {
      const request = new LoginRequest({
        username: name ?? '',
        password: password ?? ''
      });
     return  this.loginClient.login (request);
    }



}
