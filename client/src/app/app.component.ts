import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu>
      <router-outlet>
      </router-outlet>
    </app-menu>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pa-concourse';
}
