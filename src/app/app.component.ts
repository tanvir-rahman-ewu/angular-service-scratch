import { Component, Inject } from '@angular/core';
import { LogService } from './service/log.service';
import { LOG_SERVICE } from './app.module';
import { MathHelperService } from './service/math-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-scratch';

  constructor(@Inject(LOG_SERVICE) private logService: LogService, private mathHelperService: MathHelperService) {

  }
}
