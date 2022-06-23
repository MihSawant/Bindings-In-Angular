import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      h3{
        letter-spacing:3px;
        text-indent:1.2em;
      }
  `]
})
export class AppComponent {
  title = 'binding-app';
}
