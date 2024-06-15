import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ counter }}</h2>
    <button (click)="incrementButton()">+1</button>
    <button (click)="resetButton()">Reset</button>
    <button (click)="decrementButton()">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  incrementButton(): void {
    this.counter += 1;
  }

  resetButton(): void {
    this.counter = 10;
  }

  decrementButton(): void {
    this.counter -= 1;
  }
}
