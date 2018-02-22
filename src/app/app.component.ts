import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stylo Portefolio';
  informations = {
  	pseudo: 'Sylo',
  	age: 24,
  	email: 'Stylo@gmail.com'
  }
}
