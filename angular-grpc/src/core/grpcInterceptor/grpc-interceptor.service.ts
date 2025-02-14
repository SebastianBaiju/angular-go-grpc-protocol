import { Injectable } from '@angular/core';
import { GrpcEvent, GrpcMessage, GrpcRequest } from '@ngx-grpc/common';
import { GrpcHandler, GrpcInterceptor,  } from '@ngx-grpc/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class GrpcInterceptorHandler implements GrpcInterceptor {

  constructor( private _cookies: CookieService) {

  }

  intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>> {
    const token = this._cookies.get('token');
    if(token) {
    // Modify the request metadata here
    request.requestMetadata.set('authorization',`Bearer ${token}` );
    }
    // Forward the request to the next handler in the chain
    return next.handle(request);
  }
}
