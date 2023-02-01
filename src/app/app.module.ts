import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogService } from './service/log.service';
import { AppRoutingModule } from './app-routing.module';

export const LOG_SERVICE = new InjectionToken<LogService>('LOG_SERVICE');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
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
