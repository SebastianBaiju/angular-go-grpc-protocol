import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ImprobableEngGrpcWebClientModule } from '@ngx-grpc/improbable-eng-grpc-web-client';
import { grpc } from '@improbable-eng/grpc-web';

import { GRPC_INTERCEPTORS, GrpcCoreModule } from '@ngx-grpc/core';
import { routes } from './app.routes';
import { GrpcInterceptorHandler } from '../core/grpcInterceptor/grpc-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { environment } from '../environments/environment';
const xhr = grpc.CrossBrowserHttpTransport({});
const ws = grpc.WebsocketTransport();

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(GrpcCoreModule.forRoot()),
    importProvidersFrom(    ImprobableEngGrpcWebClientModule.forChild({
      settings: {
        host: environment.baseUrl,
        transport: {
          unary: xhr,
          serverStream: xhr,
          clientStream: ws,
          bidiStream: ws,
        },
        // or simply e.g.
        // transport: ws, // to configure all methods to use websockets
      },
    }),),
    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcInterceptorHandler,
      multi: true,
    }, provideAnimationsAsync(),
    provideToastr(), // Toastr providers
  ]
};
