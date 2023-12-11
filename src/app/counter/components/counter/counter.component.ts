import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <p>
  contador: {{counter}}
</p>
<button (click)="incrementCounter(2)">+1</button>
<button (click)="resetCounter()">RESET</button>
<button (click)="decrementCounter()">-1</button>`,


})

export class CounterComponent {
  public counter: number = 10;
  public name: string = '';



  incrementCounter(value: number): void {
    this.counter += value;
  }

  decrementCounter(): void {
    this.counter--;
  }

  resetCounter(): void {
    this.counter = 0;
  }

}
