import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingItemComponent } from '../app/shopping-item/shopping-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShoppingItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Signals';
}
