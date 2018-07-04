import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.total += 1;
  }

  decrement() {
    this.total -= 1;
  }

}
