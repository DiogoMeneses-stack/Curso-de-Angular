import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MeuPrimeiroComponent2} from '/meu-primeiro2/MeuPrimeiroComponent2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
