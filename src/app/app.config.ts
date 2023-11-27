import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // provideRouter(routes),
  providers: [ importProvidersFrom(HttpClientModule, RouterModule.forRoot(routes, {useHash: true} ))]
};
