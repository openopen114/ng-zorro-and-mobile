import { Component } from '@angular/core';

import { IAmZorroComponent } from './i-am-zorro/i-am-zorro.component';
import { IAmZorroMobileComponent } from './i-am-zorro-mobile/i-am-zorro-mobile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngZorroAndMobile';
}
