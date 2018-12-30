import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isMenuCollapse: boolean  = false;
  faCoffee = faCoffee;
  title = 'Danny Hyeong Ook Yu';
}
