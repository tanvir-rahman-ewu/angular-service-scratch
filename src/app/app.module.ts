import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogService } from './service/log.service';

export const LOG_SERVICE = new InjectionToken<LogService>('LOG_SERVICE');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOG_SERVICE,
      useClass: LogService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
