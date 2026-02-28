import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-pages',
  standalone: true,
  templateUrl: './counter-pages.component.html',
  styleUrl: './counter-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPagesComponent {
  counter = 10;
  countersignal = signal(10);

  constructor() {
    // setInterval(() => {
      console.log('tick');
      // this.counter += 1;
      this.countersignal.update((current) => current + 1);
    // }, 2000);
  }

  increase(value: number) {
    this.counter += value;
    this.countersignal.update((current) => current + value);
  }

  reset() {
    this.counter = 0;
    this.countersignal.set(0);
  }
}
