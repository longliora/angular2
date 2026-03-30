import { Component, signal } from '@angular/core';
import { StockItems } from './stock-items/stock-items';
@Component({
  selector: 'app-root',
  imports: [StockItems],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-market');
} 